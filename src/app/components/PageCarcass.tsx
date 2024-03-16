import React from "react";

interface Props {
    
}

const PageCarcass: React.FC = (props: Props) => {
    // const [a, b] = React.useState();
    return (
        <>
            <header className="flex justify-between mx-[15%]">
                <div className="logo"></div>
                <input
                    type="text"
                    className="searchBar"
                    placeholder=" enter search criteria"
                />
                <button className="loginImage"></button>
            </header>
            <section className="h-[100vh] mx-[15%]">MainArea <br /> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aspernatur, sequi iusto eaque hic accusantium tempora sed animi tempore? Harum, illum. Voluptatibus, obcaecati. Reiciendis omnis explicabo ad molestias, odio deserunt?</p>
            <p>Aspernatur est, voluptatum obcaecati itaque, at eaque ex veritatis eveniet reiciendis consectetur expedita consequuntur adipisci commodi similique nostrum necessitatibus quasi numquam quae dicta ipsam iste doloribus omnis quas accusantium! Dolor?</p>
            <p>Qui, placeat reiciendis? Rerum sint eveniet reprehenderit, iure enim consequuntur dolorem velit, eligendi similique qui nesciunt, nulla excepturi animi deserunt! Commodi amet quas at numquam sequi id ipsam nobis sit!</p>
            <p>Modi quidem dolorum consectetur rem earum quo aperiam id perspiciatis eaque aspernatur. Architecto sit porro non, iusto numquam consequuntur facilis fugiat assumenda modi consequatur aut eligendi tempora eius dolores officia!</p>
            <p>Possimus in eaque perferendis minus temporibus atque voluptatum unde deserunt. Esse velit accusantium veritatis hic dolores similique qui rerum numquam magnam ipsum quos distinctio suscipit ab, laudantium facere maiores debitis?</p></section>
        </>
    );
};

export default PageCarcass;
