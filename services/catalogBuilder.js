module.exports = (name, categoryCount = 1, brandCount = 1, productCount = 3, url = null) => {
    if (url === null){
        url = "http://www.example.com/"
    }
    let schema = "http://www.bazaarvoice.com/xs/PRR/ProductFeed/14.7" ;
    const products = [];
    const categories = [];
    const brands = [];
    let categoryString = ""; 
    let brandString = "" ;
    let productString = "";

    let i;
    for (i = 0; i < categoryCount; i++) { 
        let catagory = {
            exeternalId: "CategoryID" + (i+1),
            name: "Category number " + (i+1),
            categoryPageUrl: url,
            imageUrl: url+"/image.png/"
        };
        let string = 
            `<Category>
                <ExternalId>${catagory.exeternalId}</ExternalId>
                <Name>${catagory.name}</Name>
                <CategoryPageUrl>${catagory.categoryPageUrl}<CategoryPageUrl>
                <ImageUrl>${catagory.imageUrl}</ImageUrl>
            </Category>
        `;
        categoryString = categoryString + string;
        categories.push(catagory)
    }

    let a;
    for (a = 0; a < brandCount; a++) { 
        let brand = {
            exeternalId: "BrandId" + (a+1),
            name: "Brand name number "+(a+1),
        }
        let string = 
            `<Brand>
                <ExternalId>${brand.exeternalId}</ExternalId>
                <Name>${brand.name}</Name>
            </Brand>
        `;
        brandString = brandString + string;
        brands.push(brand);
    }
    let x;
    for(x=0; x < productCount; x++){
        const c = (x >= categories.length) ? 0 : x;
        const b = (x >= brands.length) ? 0 : x;

        let product = {
            exeternalId: "Product" + (x+1),
            Name: "Product Name",
            description: "Lorem ipsum dolor sit amet, ante aliquam est quis orci, tempus dignissim in dolor arcu pharetra, tempor arcu dolor fringilla.",
            brandExternalId: brands[c].exeternalId,
            categoryExternalId: categories[b].exeternalId,
            productPageUrl: url,
            imageUrl: url+'/image.png/',
            EANs: ['0213354752286', '0188173724031', '1833474920123']
        }
        
        let string = 
            `<Product>
                <ExternalId>${product.exeternalId}</ExternalId>
                <Name>${product.Name}</Name>
                <Description>${product.description}</Description>
                <BrandExternalId>${product.brandExternalId}</BrandExternalId>
                <CategoryExternalId>${product.categoryExternalId}</CategoryExternalId>
                <ProductPageUrl>${product.productPageUrl}</ProductPageUrl>
                <ImageUrl>${product.imageUrl}</ImageUrl>
                <EANs>
                    <EAN>${product.EANs[0]}</EAN>
                    <EAN>${product.EANs[1]}</EAN>
                    <EAN>${product.EANs[2]}</EAN>
                </EANs>
            </Product>
        `;
        productString = productString + string;
        products.push(product)

    }
    
    const feed = `
    <?xml version="1.0" encoding="utf-8"?>
    <Feed xmlns="${schema}" name="${name}" incremental="false" extractDate="${Date.now()}">
        <Brands>
            ${brandString}
        </Brands>
        <Categories>
            ${categoryString}
        </Categories>
        <Products>
            ${productString}
        </Products>
    </Feed>
    
    `
    

    
    return feed
}