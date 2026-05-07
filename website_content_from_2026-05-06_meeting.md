# Website content extracted from 2026-05-06 tech meeting
**Source:** internal call with Arvin, James, Christelle, Dave + others
**Use:** drop these into the existing 4-page site (index/tech/about/contact)
**Rule from memory:** the kit is *gifted*, not sold — no prices in public copy. Internal cost figures from the transcript are flagged below and excluded from the website-safe blocks.

---

## 1. New positioning line (works on Home hero + About)

> **"We're the picks and shovels of autonomous technologies."**

The strongest single line in the meeting. James used it; Arvin reinforced it. Sits naturally as a sub-hero or pull-quote: NOA isn't building drones or robots — it's enabling everyone who is.

Companion line, also from the call:

> "These guys are designing the end product, getting them certified and getting them to the end customer. We're the layer underneath."

---

## 2. The "usability" wedge (Home + Tech)

This is the new competitive narrative James and Dave landed on. Worth making explicit on the site:

> **WiTricity owns power. Energous owns distance. NOA owns usability.**

Supporting copy (paraphrased into website voice):

> Other wireless charging companies are still chasing extreme power ratings or extreme range. We chose a different battle: making wireless charging that integrates in days, not quarters. Plug-and-play. Engineer-friendly. Ready to deploy today, not in five years.

Why this matters: when prospects test NOA, what convinces them isn't peak watts — it's that it works the moment they unbox it. Site should reflect that.

---

## 3. New Home / Tech section: "Why not pogo pins?"

This is the single most-asked engineer question on calls. Deserves its own block on the Tech page.

**Copy-ready draft:**

> ### "Why not just use pogo pins?"
> Pogo pins look cheaper on a spreadsheet. They're not.
>
> - **Friction kills them.** Two metal contacts rubbing together every charge cycle, multiple times a day, for ten years. They wear, they pit, they rust.
> - **They're exposed.** Outdoor and warehouse environments aren't kind to open contacts. IP rating a pogo dock is hard and expensive.
> - **They don't scale to high power.** Above 200–300W, pogo pins stop being viable. There's a reason no electric vehicle uses them.
> - **In-house pogo design costs $100K+ and 6–8 months.** NOA drops in from day one.
>
> If pogo pins worked at high power, EVs would use them. They don't.

**Note:** the $100K / 6–8 month figure is from Arvin on the call. Confirm with him before publishing — it's a strong claim and we should be sure it holds.

---

## 4. New Home / Tech section: "Why not battery swap?"

The other dominant alternative. Worth its own short block — pairs nicely with the pogo pin block.

**Copy-ready draft:**

> ### "Why not battery swap?"
> Battery swap is still everywhere in agricultural robotics and industrial drones. It's also expensive and dangerous.
>
> - Heavy batteries, swapped multiple times a day, by hand.
> - Industrial use cases require a **certified technician** — months of training, paid double for handling hazardous loads.
> - Every swap is a chance for human error: a wrong-way connector, a short, a damaged unit.
>
> Wireless charging removes the technician, the certification overhead, and the failure mode. The drone lands on the dock the same way, every time, 24/7.

---

## 5. Customer-grounded proof block (Home)

The Guardian Skies number is the most concrete value proof in the transcript. Use it.

**Copy-ready draft:**

> ### Real deployment, real numbers
> A drone-as-a-service customer running autonomous spraying needed **18 drones to cover a 20-hectare plot** under battery-swap operations. With NOA's wireless charging integrated into their dock design, they covered the same plot with **6 drones — a 66% reduction in fleet hardware.**
>
> At enterprise drone pricing of ~$20K per unit, that's roughly **$240K saved on hardware alone** before counting reduced labour, reduced battery replacement, and the operators they no longer need on-site.

**Confirm before publishing:** Christelle gave the 18-per-20-hectare figure on the call and said they used 6 — both are quotable. Verify the customer is OK to be referenced (even un-named as "drone-as-a-service customer"). The transcript names "Guardian Skies" — don't put that on the public site without their sign-off.

---

## 6. The integration philosophy block (Tech page)

Engineer-readers will care about this. It's the answer to "do you sell a finished IP67 box?"

**Copy-ready draft:**

> ### We don't ship the dock. You design it.
> NOA gives you the wireless charging platform — transmitter electronics on the base-station side, receiver electronics on the robot/drone side. **You design the enclosure.** That's deliberate.
>
> You know your product better than we do. You know where the receiver has to sit so the weight stays balanced for autonomous landing. You know what your dock has to look like so it locks your customers into your ecosystem. You know how to certify your own product to the IP rating, the EMC standard, the country of deployment.
>
> Tightly integrated systems beat retrofits every time — better data out, better mechanical fit, easier certification. We give you the technology. You build the product around it.

---

## 7. Specs with operational consequence (Tech page)

Memory rule: every spec needs the real-world consequence next to it. Copy-ready spec table for the Tech page:

| Spec | What it means in the field |
|---|---|
| 92% end-to-end efficiency | More watts into the battery, less heat to dump, longer mission time |
| 28°C operating temp (vs 80–90°C competitors) | **Fanless.** No moving parts to fail, no acoustic signature, FLIR-quiet, dense-packable inside enclosed robots |
| 5–20mm gap tolerance | Forgiving of dock mechanical drift, battered landings, real-world misalignment |
| 50W today, 250W on roadmap | Today's robots run on it; tomorrow's heavy-lift drones won't outgrow it |
| Fully enclosed transmitter and receiver | No exposed contacts. Easier IP67/IP68 certification on your enclosure |

---

## 8. Existing customers / social proof (Home or About — gated language)

Two named on the call: PureLink (robotics) and Guardian Skies (drones). Wybotic-then-PowerMat customer Amazon also tested NOA twice.

**For public website: do not name customers without their sign-off.** Use language like:

> Currently integrated with autonomous robotics fleets and commercial drone operators in agriculture, defence, and inspection.

Action: if Arvin wants names on the site, ask each customer in writing first. Don't ship un-cleared logos.

---

## 9. The cost-savings calculator (new page or Home tile)

Dave's idea on the call — James strongly endorsed. This is the single highest-leverage *new* feature to add to the site beyond copy.

**Concept:** a small interactive widget on the Tech or Home page where an engineer plugs in their own variables — number of robots/drones, charge cycles per day, operator hourly cost, downtime per swap — and the page returns:

- Estimated annual labour saved
- Estimated hardware fleet reduction at a given utilisation
- Estimated downtime recovered

The output isn't a quote. It's a *frame* the prospect can use to convince their own team. James's logic: people don't trust numbers we hand them; they trust numbers they generate themselves with our formula.

**Suggested formula inputs:**
- Drones/robots in fleet
- Charge events per drone per day
- Minutes per battery swap (or per pogo dock failure event)
- Loaded hourly cost of a certified technician
- Drone unit cost (for fleet-reduction modelling — borrow the Guardian Skies 66% benchmark as a "what's possible" anchor)

**Output the page should generate:**
- "Based on your inputs, eliminating manual charging would save approximately **X technician-hours per year** and **$Y in labour cost.**"
- "If your fleet utilisation improves by Z% (typical NOA deployment), you could meet the same workload with **N fewer drones / robots — approximately $M in capex.**"
- A clear caveat: *"These figures are directional. Real savings depend on your duty cycle, ambient conditions, and dock design. Request a Dev Kit to validate against your own deployment."*

This is a separate build — but worth scoping in the next pass. It's the thing James said gets them excited in 30 seconds.

---

## 10. New objection-handling FAQ block (Tech or Contact page)

Three engineer questions came up repeatedly on the call. Each deserves a short Q&A block:

> **Can I keep my existing pogo pins as a fallback?**
> Yes. If you're retrofitting an existing platform and don't want to redesign the chassis, NOA can sit alongside pogo pins as a redundancy path. New designs typically drop the pogo pins entirely — the extra weight and cost stops being worth it.

> **How is this better than the wireless charging I've already evaluated?**
> Most wireless charging vendors target either extreme power (EV-class) or extreme distance. Both come with cost and integration burdens that don't suit autonomous robotics. NOA optimises for the deployment realities of robots and drones: tight space, weight-constrained, fanless, certifiable on your enclosure.

> **What about heat?**
> Competing solutions typically rely on fans or oversized heat sinks to manage thermal load. NOA runs at ~28°C under continuous operation — fanless, dense-packable, no acoustic or thermal signature.

---

## 11. CTA wording (Contact page — confirm)

Memory rule: the kit is gifted, not sold. Public CTA must read **"Request a Dev Kit"** (the team's own term, the universal embedded-engineer term, and what NOA's chip-vendor analog peers all use) — not "buy", "configure", "order", or any price tag.

The current contact.html should be checked against this before launch. (See `project_engineer_handover_pack_todo` — also need to confirm the 5 gated assets promised on contact.html actually exist.)

---

## What I am *deliberately* leaving off the public site

- **All internal pricing.** Wybotic at $10K/kit, NOA's internal $500–600 USD/kit cost, the under-$50K full-deployment figure, and the $100K pogo in-house cost. These are powerful in a sales conversation, weak on a public page where competitors can read them.
- **Customer names.** PureLink, Guardian Skies, the Amazon-Wybotic-PowerMat lineage. Until those customers sign off, they stay in private decks.
- **The "they're testing us so they don't know what they're testing" close.** That's a sales-conversation move, not website copy.
- **The drone-delivery vertical.** Arvin and James agreed it's a long-term play, not an "instant win." Mentioning it on the site invites prospect questions we don't yet want to answer.

---

## Suggested next moves

1. Walk through the existing four HTML pages and slot blocks 1–7 + 10 into place. Ask before publishing block 5 (Guardian Skies numbers) and block 8 (any named customers).
2. Get Arvin to confirm or correct: the $100K / 6–8 month pogo figure, the 18→6 drone Guardian Skies number, and whether the Wybotic-PowerMat-Amazon storyline can be alluded to (even un-named).
3. Scope the calculator (block 9) as a separate v1.1 build once the copy refresh is shipped.
