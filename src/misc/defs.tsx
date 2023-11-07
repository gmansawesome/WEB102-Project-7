

const classDefs = {
    Captain: {
      min_speed: 2,
      max_speed: 4,
      min_pay: 1000.0,
      max_pay: 5000.0,
      default_desc:
        "The captain of the ship, the inspiration and enemy of the crew.",
    },
    Consultant: {
      min_speed: 1,
      max_speed: 4,
      min_pay: 10000.0,
      max_pay: 50000.0,
      default_desc:
        "A provider of powerpoints and a drainer of wallets. No one knows what they do onboard the spaceship, but the higher-ups say he's absolutely necessary.",
    },
    Officer: {
      min_speed: 2,
      max_speed: 3.9,
      min_pay: 800.0,
      max_pay: 4000.0,
      default_desc:
        "One of the captain's closest allies, the upper crust of the crew with the 2nd strongest authority.",
    },
    Police: {
      min_speed: 2,
      max_speed: 4.4,
      min_pay: 600.0,
      max_pay: 2000.0,
      default_desc:
        "A security officer who keeps the crew in line and makes sure things are in order.",
    },
    Veteran: {
      min_speed: 3,
      max_speed: 5.1,
      min_pay: 200.0,
      max_pay: 2000.0,
      default_desc: "An experienced deck hand who has been around.",
    },
    Lackey: {
      min_speed: 2,
      max_speed: 5,
      min_pay: 100.0,
      max_pay: 1000.0,
      default_desc:
        "Grunt worker. According to the higher ups, an 'expendable asset'.",
    },
    Intern: {
      min_speed: 1,
      max_speed: 4,
      min_pay: 0.0,
      max_pay: 0.0,
      default_desc: "Makes coffee. Has dreams and aspirations.",
    },
    Passenger: {
      min_speed: 1,
      max_speed: 4,
      min_pay: 0.0,
      max_pay: 10.0,
      default_desc:
        "No one knows how they got onboard (the luggage bay), but they're here now...",
    },
    Exploiter: {
      min_speed: 10,
      max_speed: 99,
      min_pay: 0.0,
      max_pay: 0.0,
      default_desc: "Undeniable proof we're living in a simulation.",
    },
  };

  interface classInterface {
    min_speed: number;
    max_speed: number;
    min_pay: number;
    max_pay: number;
  }

  export default {classDefs: classDefs}