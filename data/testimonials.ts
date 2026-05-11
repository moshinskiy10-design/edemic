export type Testimonial = {
  name: string;
  city: string;
  dog: string;
  breed: string;
  quote: string;
  outcome: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rachel H.",
    city: "Bendigo, VIC",
    dog: "Daisy",
    breed: "Kelpie",
    quote:
      "I'd spent four hundred bucks on 'premium' kibble Daisy wouldn't touch. The quiz pegged her as anxious in 60 seconds. Three weeks in she's eating without me hovering.",
    outcome: "Eating consistently in 21 days",
  },
  {
    name: "Mark T.",
    city: "Geelong, VIC",
    dog: "Bruno",
    breed: "Staffy",
    quote:
      "Bruno was a 'spoiled' eater — held out for our dinner. Bit of tough love from Steffi and the schedule reset in a week.",
    outcome: "Begging stopped in 7 days",
  },
  {
    name: "Lena P.",
    city: "Sunshine Coast, QLD",
    dog: "Pippa",
    breed: "Cavoodle",
    quote:
      "Pippa would eat for two days and quit. The rotation plan was the bit I was missing. No more chucking food out.",
    outcome: "Zero wasted meals this month",
  },
  {
    name: "Tom K.",
    city: "Perth, WA",
    dog: "Wally",
    breed: "Border Collie",
    quote:
      "Health-sensitive result. Steffi pushed me to the vet first — turned out to be a food allergy I'd been masking with toppers for a year.",
    outcome: "Allergy identified · coat back",
  },
  {
    name: "Aisha R.",
    city: "Newcastle, NSW",
    dog: "Olive",
    breed: "Cavoodle",
    quote:
      "Two kids under five and a fussy dog. The 15-minute rule felt brutal day one. By Friday she was waiting at her bowl.",
    outcome: "Routine sticking · less stress",
  },
  {
    name: "Pete D.",
    city: "Hobart, TAS",
    dog: "Macca",
    breed: "Labrador",
    quote:
      "Macca's a Lab. The idea he'd 'go off' his food was absurd until winter hit. Bored eater. A topper sorted it.",
    outcome: "Back to inhaling dinner",
  },
];
