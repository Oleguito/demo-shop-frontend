import React, { useContext, useEffect, useState } from 'react';
import { ProductQuery } from '@/types/product/product.types.ts';
import { CategoryResponse } from '@/types/category/Category.ts';
import { getAllProducts } from '@/api/backend/Products.ts';
import { getAllCategories } from '@/api/backend/Categories.ts';
import { Button } from '@/components/ui/button.tsx';
import { GrAdd } from 'react-icons/gr';
import { putProductInCurrentUsersProductBin } from '@/api/backend/Users.ts';
import Image from 'next/image';
import { GlobalContext } from '@/app/context/GlobalContext.tsx';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export function MainLayout() {
  const [products, setProducts] = useState([] as ProductQuery[]);
  const [categories, setCategories] = useState([] as CategoryResponse[]);
  const context = useContext(GlobalContext);

  useEffect(() => {
    getAllProducts().then((all) => {
      setProducts(all);
    });
    getAllCategories().then((all) => {
      setCategories(all);
    });
  }, []);

  return (
    <section className="h-[100vh] mx-[15%] mainLayoutSection">
      <h1>Products by categories</h1>
      {categories.map((category) => {
        return (
          <>
            <h2 key={category.id}>{category.title}</h2>
            <div className="productInCategoryContainer">
              {products
                .filter((product) => {
                  return product.category.id === category.id;
                })
                .map((product) => {
                  return (
                    <>
                      <div className="productInCategory text-blue-800">
                        <h1 className={'bg-blue-200 text-blue-800'}>
                          {product.title}
                        </h1>
                        <img
                          className="bg-no-repeat bg-center bg-contain"
                          src="/img/product-icon.png"
                          width={100}
                          alt="Product image"
                        />
                        {context.userIsLoggedIn && (
                          <Button
                            className={'hover:text-amber-100 font-bold'}
                            onClick={() => {
                              console.log(
                                'adding product to your product bin...',
                              );
                              putProductInCurrentUsersProductBin(
                                context.loggedInUserData.id,
                                product,
                              ).then((r) => {
                                toast(`Product ${product.title} has been added to your Product bin`);
                              });
                            }}
                          >
                            <GrAdd />
                          </Button>
                        )}
                      </div>
                    </>
                  );
                })}
            </div>
          </>
        );
      })}
    </section>
  );
}
