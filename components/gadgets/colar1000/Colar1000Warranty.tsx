
export default function Colar1000Warranty() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5">
        <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6 md:p-9">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Buy with Confidence
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950">
                1-Year Warranty Support
              </h2>
            </div>
          </div>

          <p className="text-gray-700 leading-7">
            Every Colar1000 unit purchased from Starntech comes with
            <strong> 1 year of manufacturer's warranty support</strong>
            for eligible product defects, subject to the manufacturer's
            warranty terms and conditions.
          </p>

          <div className="mt-6">
            <h3 className="font-extrabold text-gray-900">
              Need Warranty Assistance?
            </h3>
            <p className="text-gray-700 leading-7 mt-2">
              Simply contact Starntech. We'll guide you through the
              process and coordinate with ColaSolar for product assessment
              and applicable warranty support.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-extrabold text-amber-900">
              Important: Solar Panel Compatibility
            </h3>
            <p className="text-sm text-amber-900 leading-6 mt-2">
              Use solar panels that meet the relevant Colar1000 model's
              specifications. Unsuitable panels may damage the power station
              and could affect warranty eligibility. If you're unsure
              which panel is suitable, contact Starntech before connecting one.
            </p>
          </div>

          <details className="mt-7 border-t border-green-200 pt-5 group">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-extrabold text-green-800">
              <span>Read Full Warranty Terms &amp; Exclusions</span>
              <span className="text-xl transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>

            <div className="mt-5 space-y-6 text-sm text-gray-700 leading-7">
              <div>
                <h3 className="font-extrabold text-gray-950">
                  1. Warranty Coverage
                </h3>
                <p className="mt-2">
                  The manufacturer's warranty policy provides:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Coverage for eligible product defects caused by
                    non-human factors.
                  </li>
                  <li>
                    Free warranty service for eligible faults within the
                    applicable warranty period.
                  </li>
                  <li>
                    Exchange for the same model within 7 days of purchase
                    for eligible damage caused by non-human factors,
                    subject to the manufacturer's conditions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-extrabold text-gray-950">
                  2. Proof of Purchase
                </h3>
                <p className="mt-2">
                  A valid invoice, receipt or warranty card may be required
                  when requesting an exchange or warranty service.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-gray-950">
                  3. Warranty Exclusions
                </h3>
                <p className="mt-2">
                  The manufacturer's warranty does not cover:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Non-quality-related issues.</li>
                  <li>Purchases without valid proof of purchase.</li>
                  <li>Products that have been refunded.</li>
                  <li>Products outside their applicable warranty period.</li>
                  <li>
                    Damage caused by misuse, unauthorized modifications,
                    disassembly or operation contrary to official instructions.
                  </li>
                  <li>
                    Damage caused by excessive heat, liquid exposure or
                    other external factors.
                  </li>
                  <li>
                    Damage resulting from compatibility or reliability
                    issues involving unauthorized third-party parts.
                  </li>
                  <li>Lost or stolen products.</li>
                  <li>Free promotional products.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-extrabold text-gray-950">
                  4. Solar Panel Compatibility
                </h3>
                <p className="mt-2">
                  Use compatible solar panels that meet the specific
                  power station's specifications. Unsuitable panels may
                  damage the unit and could affect warranty eligibility.
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-gray-950">
                  5. After-Sales Support Through Starntech
                </h3>
                <p className="mt-2">
                  Contact Starntech first. We'll guide you through the
                  warranty process and coordinate with ColaSolar for
                  product assessment and applicable support.
                </p>
              </div>

              <p className="text-xs text-gray-500 border-t border-gray-200 pt-4">
                The free promotional solar fan is excluded from the
                manufacturer's warranty. All warranty claims are
                subject to the manufacturer's applicable terms
                and assessment.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
