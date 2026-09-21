import thumbnail003Lab from "../../../assets/thumbnails/003lab.png";
import thumbnailTuGia from "../../../assets/thumbnails/tugia.png";
import thumbnailSihub from "../../../assets/thumbnails/sihub.jpg";
import thumbnailGokstad from "../../../assets/thumbnails/gokstad.jpg";
import thumbnailVnsic from "../../../assets/thumbnails/vnsic.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "003Lab",
    slug: "003lab",
    thumbnail: thumbnail003Lab,
    description: "Language-learning apps content across 5 markets",
  },
  {
    title: "Tứ Gia Co., Ltd.",
    slug: "tugia",
    thumbnail: thumbnailTuGia,
    description: "Marketing lead for an imported beer brand",
  },
  {
    title: "SIHUB",
    slug: "sihub",
    thumbnail: thumbnailSihub,
    description: "Startup ecosystem content & events",
  },
  {
    title: "Nordic Perspectives Workshop",
    slug: "gokstad",
    thumbnail: thumbnailGokstad,
    description: "Visual identity for an international workshop",
  },
  {
    title: "VNSIC 2025",
    slug: "vnsic",
    thumbnail: thumbnailVnsic,
    description: "Media & communications for a 2,000+ attendee innovation event",
  },
  {
    title: "Nghe Tiếng Là Có Miếng, Tet 2027 Campaign Proposal",
    slug: "nghe-tieng-la-co-mieng",
    thumbnail: "/proposal-3-chu-meo.png",
    description:
      "A self-initiated campaign proposal for Truoo Pet Care's Tet 2027 season, built from market research to a full measurement plan across content, KOC, livestream and retail activation.",
    externalLink: "/nghe-tieng-la-co-mieng.html",
  },
] as const satisfies ProjectPreview[];
