"use client";

import { useState } from "react";

const amounts = [5, 15, 30, 50];

export default function DonatePage() {
  const [amount, setAmount] = useState("15");

  return (
    <section className="page-shell py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div className="rounded-lg bg-sage-pale p-6 sm:p-8">
          <p className="eyebrow">Donation</p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink">
            Support sisters in need and help keep the space cared for.
          </h1>
          <p className="mt-5 leading-8 text-muted">
            Donations can support needy sisters, community care efforts, moderation,
            accessibility, and the ongoing stewardship of Al-Kawthar Space.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Needy sisters", "Platform care", "Community support"].map((purpose) => (
              <div className="rounded-md bg-white p-4 text-sm font-semibold text-ink" key={purpose}>
                {purpose}
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card p-6 sm:p-7">
          <h2 className="font-display text-3xl font-semibold text-ink">Choose an amount</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {amounts.map((value) => (
              <button
                className={`rounded-md border px-4 py-4 text-lg font-semibold transition ${
                  amount === String(value)
                    ? "border-sage-base bg-sage-base text-white"
                    : "border-[rgba(61,46,39,0.12)] bg-white text-ink hover:border-sage-base"
                }`}
                key={value}
                onClick={() => setAmount(String(value))}
                type="button"
              >
                ${value}
              </button>
            ))}
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
            Custom amount
            <input
              className="input-field"
              inputMode="numeric"
              onChange={(event) => setAmount(event.target.value)}
              value={amount}
            />
          </label>
          <button className="btn-primary mt-6 w-full" type="button">
            Continue with ${amount || "0"}
          </button>
          <p className="mt-4 text-sm leading-6 text-muted">
            Payment integration is intentionally not connected in this local prototype.
          </p>
        </div>
      </div>
    </section>
  );
}
