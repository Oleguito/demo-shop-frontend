import React from 'react';
import Link from 'next/link';

// onClick={() => {
//   console.log("redirecting to edit category...");
//   // const newData = { title: "Oleguinho!!!!"};
//   // console.log(newData);
//   // modifyCategory(row.original.id, newData).then(
//   //   r => console.log("columns response then:\n" + r)
//   // )
// }}

type Props = {
  href: string;
  data: any;
}

const LinkWithProps = (props: Props) => {
  return (
    <>
    <Link href={props.href} >
    
    </Link>
    </>
  );
};
export default LinkWithProps;
