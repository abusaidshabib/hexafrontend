import { Card, CardBody } from "@heroui/react";

const SingleProduct = ({ product }) => {
    return (
        <Card className="w-48" shadow="none">
            <CardBody className="text-start text-balance">
                <div className="relative h-48 md:h-36 rounded-lg overflow-hidden group bg-gradient-to-b from-gray-100 to-gray-300 items-center">
                    <img src={product?.images[0]} alt="" width={172} height={172} />

                </div>

                <h3 className="text-sm font-medium text-gray-600 pt-4">{product?.name}</h3>
                <p className="text-lg font-bold text-black mt-1">{product?.price}</p>
                <div className="flex justify-left items-center space-x-2 mt-2">
                    <span className="w-4 h-4 rounded-full bg-black border border-gray-300" />
                    <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300" />
                    <span className="w-4 h-4 rounded-full bg-white border border-gray-300" />
                </div>
            </CardBody>
        </Card>
    );
};

export default SingleProduct;