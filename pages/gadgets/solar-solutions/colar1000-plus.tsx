import Colar1000LandingTemplate from "../../../components/gadgets/colar1000/Colar1000LandingTemplate";
import Colar1000PlusFreezerSection from "../../../components/gadgets/colar1000/Colar1000PlusFreezerSection";
import Colar1000PlusFAQ from "../../../components/gadgets/colar1000/Colar1000PlusFAQ";
export default function Colar1000PlusPage() {
  return (
    <>
      <Colar1000LandingTemplate
        model={{
          id: "plus",
          name: "Colar1000 Plus",
          output: "500W",
          offer: "Buy 1 Colar1000 Plus unit",
          quantity: 1,
          description:
            "A portable solar power station with a stated 1,004.8Wh battery capacity and 500W inverter output.",
        }}
        freezerSection={<Colar1000PlusFreezerSection />}
      />

      <Colar1000PlusFAQ />
    </>
  );
}