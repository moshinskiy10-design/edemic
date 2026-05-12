export type SocialProofEvent = {
  name: string;
  city: string;
  action: string;
  timeAgo: string;
  mapTile: string; // OpenStreetMap tile URL for the city
};

// AU-only social proof. Map thumbnails are real OpenStreetMap tiles at z=11.
// Tile coords precomputed via slippy-map math (lat/lng → x/y at zoom 11).
export const socialProofEvents: SocialProofEvent[] = [
  {
    name: "Rachel H.",
    city: "Bendigo, VIC",
    action: "took the free 60-second quiz",
    timeAgo: "Just now",
    mapTile: "https://tile.openstreetmap.org/11/1844/1249.png",
  },
  {
    name: "Mark T.",
    city: "Geelong, VIC",
    action: "got matched as a Spoiled Eater",
    timeAgo: "2 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1845/1259.png",
  },
  {
    name: "Lena P.",
    city: "Sunshine Coast, QLD",
    action: "joined the $47 self-guided program",
    timeAgo: "4 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1894/1181.png",
  },
  {
    name: "Tom K.",
    city: "Perth, WA",
    action: "started the free 5-day email course",
    timeAgo: "7 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1683/1216.png",
  },
  {
    name: "Aisha R.",
    city: "Newcastle, NSW",
    action: "received her personalised feeding plan",
    timeAgo: "11 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1887/1222.png",
  },
  {
    name: "Pete D.",
    city: "Hobart, TAS",
    action: "got matched as a Bored Eater",
    timeAgo: "18 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1862/1294.png",
  },
  {
    name: "Sophie L.",
    city: "Adelaide, SA",
    action: "took the free 60-second quiz",
    timeAgo: "24 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1812/1236.png",
  },
  {
    name: "Daniel W.",
    city: "Brisbane, QLD",
    action: "joined the 60-day guarantee program",
    timeAgo: "31 minutes ago",
    mapTile: "https://tile.openstreetmap.org/11/1894/1186.png",
  },
];
