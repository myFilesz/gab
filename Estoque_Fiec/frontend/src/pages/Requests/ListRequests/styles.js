import styled from 'styled-components'


export const TableWrapper = styled.div`
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
`

export const Table = styled.table`
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

    td,th{
        text-align: center;
        padding: 8px;
    }

    td{
        border-right: 1px solid #f8f8f8;
        font-size: 12px;
    }

    thead th{
        color: black;
        background: #fff;
    }

    thead th:nth-child(odd) {
        color: #ffffff;
        background: #3951b2;
    }

    tr:nth-child(even) {
    background: #F8F8F8;

    /* @media (max-width: 767px) {
        display: block;
        width: 100%;
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
     thead,  tbody,  thead th {
        display: block;
    }
     thead th:last-child{
        border-bottom: none;
    }
     thead {
        float: left;
    }
     tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
     td,  th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
     thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
     tbody tr {
        display: table-cell;
    }
     tbody tr:nth-child(odd) {
        background: none;
    }
     tr:nth-child(even) {
        background: transparent;
    }
     tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
     tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
     tbody td {
        display: block;
        text-align: center;
    }
} */
}
`

/* Responsive */

