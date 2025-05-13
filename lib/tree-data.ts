import type { TreeType } from "./types"

// ODTÜ kampüsü içinde farklı konumlar
export const treeData: TreeType[] = [
  {
    id: 1,
    name: "Kayın",
    scientificName: "Fagus orientalis",
    lifespan: "150-250 yıl",
    info: "Düzgün gri kabuklu, gölgeye dayanıklı bir orman ağacıdır.",
    imageFile: "kayin.png",
    geoPosition: [39.891, 32.784], // Merkez kampüs yakınında
  },
  {
    id: 2,
    name: "Gürgen",
    scientificName: "Carpinus betulus",
    lifespan: "100-150 yıl",
    info: "Sert odunuyla bilinir, yaprakları dişli kenarlıdır.",
    imageFile: "gurgen.png",
    geoPosition: [39.893, 32.78], // Kuzey kampüs tarafında
  },
  {
    id: 3,
    name: "Kavak",
    scientificName: "Populus alba",
    lifespan: "40-50 yıl",
    info: "Hızlı büyür, su kenarlarını sever, yaprak altları beyazdır.",
    imageFile: "kavak.png",
    geoPosition: [39.887, 32.775], // Gölet yakınında
  },
  {
    id: 4,
    name: "Çam",
    scientificName: "Pinus nigra",
    lifespan: "100-300+ yıl",
    info: "İğne yapraklı, her dem yeşil, reçineli bir ağaçtır.",
    imageFile: "cam.png",
    geoPosition: [39.885, 32.787], // Orman alanında
  },
  {
    id: 5,
    name: "Zeytin",
    scientificName: "Olea europaea",
    lifespan: "Yüzlerce yıl, hatta binlerce yıl yaşayabilir",
    info: "Akdeniz ikliminin simgesi, meyvesi ve yağı değerlidir.",
    imageFile: "zeytin.png",
    geoPosition: [39.889, 32.79], // Güney kampüs tarafında
  },
  {
    id: 6,
    name: "Meşe",
    scientificName: "Quercus petraea",
    lifespan: "200-500+ yıl",
    info: "Güçlü ve dayanıklı, palamutları olan önemli bir orman ağacıdır.",
    imageFile: "mese.png",
    geoPosition: [39.895, 32.782], // Kuzey orman alanında
  },
]
