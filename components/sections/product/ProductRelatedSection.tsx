import type { RelatedProduct } from "@/lib/products";

function formatPrice(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}

export function ProductRelatedSection({
  products,
}: {
  products: RelatedProduct[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-[40px] lg:py-[60px] bg-[#f5f7fa]">
      <div className="max-w-[1080px] mx-auto px-5">
        <h2 className="text-[20px] lg:text-[24px] font-[800] text-[#171819] mb-[24px]">
          광고주님을 위한 추천
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[16px]">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-[12px] border border-[#f1f2f3] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-[#f5f7fa] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[12px] lg:p-[16px]">
                <h3 className="text-[13px] lg:text-[14px] font-[600] text-[#171819] mb-[4px] line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-[700] text-[#0177fb]">
                  {formatPrice(product.price)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
