import CatalogProductCard from "./CatalogProductCard";

const products = {
    "Airpods": [
        { name: "Round box speaker", price: "$45.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/RoundSpeaker_12a_a12ec6dc-8c48-4d78-b508-51aa989c652a.jpg?v=1730878974&width=180" },
        { name: "Pro max airbuds", price: "$58.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/Earbuds_9a_dfe7afcb-a8ab-4532-aa8f-a53f711bdfaf.jpg?v=1730878737&width=180" },
        { name: "Pro airbuds", price: "$40.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/AirPod-13a_2b07b70e-6b7c-4503-8565-e7aa2e1c7de3.jpg?v=1730878769&width=180" },
    ],
    "Luxury Watches": [
        { name: "Projector", price: "$13,999.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/Projector_6a_5ab2aeff-647d-4431-9803-6a0c07193a5d.jpg?v=1730878824&width=180" },
        { name: "Speakers Bass Tube", price: "$1,250.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/Bluetooth_speaker_7a_9307bde2-b00d-4f4b-a972-6ceb5b51e039.jpg?v=1730879150&width=180" },
        { name: "Digital Camera", price: "$125.00", image: "https://yuva-theme-amaze.myshopify.com/cdn/shop/files/Camera_10a_7acc8d06-da0c-4c9a-b021-906e9c7e734c.jpg?v=1730878192&width=180" },
    ],
};
const CatalogMegaMenu = () => {
    return (
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Product Lists */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
                {Object.entries(products).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-xl font-semibold mb-4">{category}</h2>
                        <div className="space-y-6">
                            {items.map((item, index) => (
                                <CatalogProductCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side - Feature Images */}
            <div className="space-y-6">
                <img
                    src="https://yuva-theme-amaze.myshopify.com/cdn/shop/files/col_6.jpg?v=1667480557&width=360"
                    alt="Watch Preview"
                    className="rounded-xl w-full h-56 object-cover"
                />
                <img
                    src="https://yuva-theme-amaze.myshopify.com/cdn/shop/files/col_2.jpg?v=1667478051&width=360"
                    alt="Earbud Preview"
                    className="rounded-xl w-full h-56 object-cover"
                />
            </div>
        </div>
    );
};

export default CatalogMegaMenu;