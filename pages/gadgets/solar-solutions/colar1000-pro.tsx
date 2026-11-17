import Colar1000LandingTemplate from "../../../components/gadgets/colar1000/Colar1000LandingTemplate";

export default function Colar1000ProPage() {
  return (
    <Colar1000LandingTemplate
      model={{
        id: "pro",
        name: "Colar1000 Pro",
        output: "300W",
        offer: "Buy 2 Colar1000 Pro units",
        quantity: 2,
        description:
        "A portable solar power station with a stated 1,004.8Wh  battery capacity and 300W inverter output.",
      }}
    />
  );
}