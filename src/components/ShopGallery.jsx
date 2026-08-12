import SmartImage from "./SmartImage.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { images } from "../data/images.js";

const captions = [
  "Storefront",
  "Showroom interior",
  "Product display",
  "Material & profile display",
  "Completed interior products",
  "Workshop & fabrication",
];

export default function ShopGallery() {
  const [large, ...rest] = images.shop;

  return (
    <section className="section-pad py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Showroom"
          title="Visit Aluminium Center."
          body="Explore our space, materials, finishes, and the work behind every project."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          <SmartImage
            src={large}
            alt="Aluminium Center showroom interior"
            label={captions[0]}
            className="col-span-2 aspect-[4/3] lg:col-span-4 lg:row-span-2 lg:aspect-auto"
          />
          {rest.map((src, i) => (
            <SmartImage
              key={src}
              src={src}
              alt={`Aluminium Center — ${captions[i + 1]}`}
              label={captions[i + 1]}
              className="aspect-square lg:col-span-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
