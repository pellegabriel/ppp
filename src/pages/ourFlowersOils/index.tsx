'use client'
import styles from "./page.module.scss";
import coco1 from "../../../assets/coco1.jpg";
import coco2 from "../../../assets/coco2.jpg";
import { FlowerBox } from "../../components";
const flowerData = [
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
];

export default function Page() {
	return (
    <div className={styles.ourFlowersOilsContainer}>
      <h1>our Flowers & Oils</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia ipsum vero omnis repudiandae, iure quia amet ipsam numquam recusandae quisquam consectetur, iusto totam. Nulla eaque optio ut quae ad?.</p>
            <main className={styles.mainContent}>
        {flowerData.map((flower, index) => (
          <FlowerBox
            key={index}
            image={flower.image}
            alt={flower.alt}
            text={flower.text} id={undefined}          />
        ))}
      </main>
    </div>    )
}
