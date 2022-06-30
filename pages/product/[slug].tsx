type ProductPagePropsType = {
	product: {
		id: number;
		combinationId: number;
		rewrite: string;
	}
}

function ProductPage({ product }: ProductPagePropsType) {
	const { id, combinationId, rewrite } = product;
	return <h1>{`${id}-${combinationId}-${rewrite}`}</h1>
}

export function getServerSideProps({ query }: any) {
	const [
		productId,
		combinationId,
		...splittedProductRewrite
	] = query.slug.split('-');
	const productRewrite = splittedProductRewrite.join(',');
	return {
		props: {
			product: {
				id: productId,
				combinationId: combinationId,
				rewrite: productRewrite,
			},
		}
	};
}

export default ProductPage;