import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    // 创建 Stripe Checkout 会话
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "赞助支持",
              description: "感谢您对 AI Programming Learning 的支持",
            },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`,
    });

    return NextResponse.json({ sessionId: stripeSession.id });
  } catch (error) {
    console.error("创建赞助会话失败:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "创建赞助会话失败" },
      { status: 500 }
    );
  }
} 