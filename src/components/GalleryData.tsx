import { FileImage } from "lucide-react";

type GalleryDataItem = {
  title: string;
  path?: string;
  thumbnail: React.ReactNode;
  cName: string;
  favourite: boolean;
  lastUsed?: string;
  id?: string;
};

export const GalleryData: GalleryDataItem[] = [
  {
    title: "Default Project",
    path: "/",
    thumbnail: <FileImage />,
    cName: "gallery-item",
    favourite: false,
    lastUsed: "1 Month Ago",
    id: "1122",
  },
  {
    title: "Draw Together Project",
    path: "/",
    thumbnail: <FileImage />,
    cName: "gallery-item",
    favourite: false,
    lastUsed: "1 Month Ago",
    id: "1133",
  },
];
