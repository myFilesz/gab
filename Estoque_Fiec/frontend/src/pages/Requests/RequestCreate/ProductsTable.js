import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

import { Table, THead, TBoby, Th, Td, WrapTable, Options } from "./styles";

export default function ProductsTable(props) {
  const newList = props.props;
  const [productsList, setProductsList] = useState("");
  const [empty, setEmpty] = useState("");
  console.log(productsList);

  useEffect(() => {
    setProductsList(newList);
  }, [newList]);

  return (
    <div>
      <WrapTable>
        <Table>
          <THead>
            <tr>
              <Th>Produto</Th>
              <Th>Descrição</Th>
              <Th>Qtde</Th>
              <Th>Proço Unitario</Th>
              <Options>-----</Options>
            </tr>
          </THead>
          <TBoby>
            {productsList &&
              productsList.map(p => (
                <tr key={p.id}>
                  <Td>{p.name}</Td>
                  <Td>-</Td>
                  <Td>{p.qtde}</Td>
                  <Td>R${p.unitPrice}</Td>
                  <Td>
                    <MdDelete onClick={() => console.log("Excluir")} />
                  </Td>
                </tr>
              ))}
          </TBoby>
        </Table>
      </WrapTable>
    </div>
  );
  // return (
  //   <div>
  //     <WrapTable>
  //       <Table>
  //         <THead>
  //           <tr>
  //             <Th>Produto</Th>
  //             <Th>Descrição</Th>
  //             <Th>Qrde</Th>
  //             <Th>Proço Unitario</Th>
  //             <Options>-----</Options>
  //           </tr>
  //         </THead>
  //         <TBoby>
  //           <tr>
  //             <Td>---</Td>
  //             <Td>---</Td>
  //             <Td>---</Td>
  //             <Td>---</Td>
  //             <Td>
  //               <MdDelete />
  //             </Td>
  //           </tr>
  //         </TBoby>
  //       </Table>
  //     </WrapTable>
  //   </div>
  // );
}
