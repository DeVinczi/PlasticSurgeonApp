import React, { useState } from 'react';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';

const Table = () => {
    const [activeRows, setActiveRows] = useState([]);

    const handleToggleCollapse = (row) => {
        if (activeRows.includes(row)) {
            setActiveRows(activeRows.filter((activeRow) => activeRow !== row));
        } else {
            setActiveRows([...activeRows, row]);
        }
    };

    const items = [
        {
            id: 1,
            name: 'KONSULTACJA Lekarz chirurgii plastycznej',
            operationArea: null,
            rows: [
                {
                    id: 'row1',
                    content: 'Pierwsza wizyta',
                    area: null,
                    count: null,
                    price: 300
                },
                {
                    id: 'row2',
                    content: 'Kolejna wizyta',
                    area: null,
                    count: null,
                    price: 400
                },
                {
                    id: 'row3',
                    content: 'Wizyta dla Par',
                    area: null,
                    count: null,
                    price: 500
                },
            ],
        },
        {
            id: 2,
            name: 'Dermatologia estetyczna',
            operationArea: "Całe ciało",
            rows: [
                {
                    id: 'row4',
                    content: 'Foxy Eyes',
                    area: null,
                    count: null,
                    price: 500
                },
                {
                    id: 'row5',
                    content: 'Toksyna botulinowa',
                    area: "Twarz",
                    count: 1,
                    price: 500
                },
                {
                    id: 'row6',
                    content: 'Toksyna botulinowa',
                    area: "Twarz",
                    count: 5,
                    price: 2000
                },
                {
                    id: 'row6',
                    content: 'Toksyna botulinowa',
                    area: "Twarz",
                    count: 10,
                    price: 3500
                },
                {
                    id: 'row6',
                    content: 'Leczenie bruksizmu',
                    area: null,
                    count: null,
                    price: "od 1900"
                },
                {
                    id: 'row6',
                    content: 'Leczenie nadmiernej potliwości',
                    area: null,
                    count: null,
                    price: "od 2850"
                },
            ],
        },
        {
            id: 3,
            name: 'Chirurgia Plastyczna',
            operationArea: null,
            rows: [
                {
                    id: 'row7',
                    content: 'Laparoskopowa rekonstrukcja rozejścia kresy białej',
                    area: null,
                    count: 1,
                    price: 15000
                },
                {
                    id: 'row8',
                    content: 'Liposukcja HD',
                    area: null,
                    count: 1,
                    price: 25000
                },
                {
                    id: 'row9',
                    content: 'Piersi podniesienie + piersi implanty (powiększenie)',
                    area: null,
                    count: 1,
                    price: "27500 - 32500"
                },
                {
                    id: 'row9',
                    content: 'Face Lipofilling - Przeszczep tłuszczu z komórkami mezenchymalnymi',
                    area: null,
                    count: 1,
                    price: "od 10500"
                },
                {
                    id: 'row9',
                    content: 'Brazylijskie pośladki (Przeszczep tłuszczu, liposukcja pleców, bioder, ud)',
                    area: null,
                    count: 1,
                    price: "26200 - 31500"
                },
            ],
        },
        {
            id: 4,
            name: 'Plastyka',
            rows: [
                {
                    id: 'row10',
                    content: 'Waginoplastyka',
                    area: "Wagina",
                    count: null,
                    price: 7900
                },
                {
                    id: 'row10',
                    content: 'Uszy zmniejszenie',
                    area: "Uszy",
                    count: null,
                    price: "9400 - 10500"
                },
            ],
        },
        {
            id: 5,
            name: 'Laseroterapia',
            rows: [
                {
                    id: 'row13',
                    content: 'Laser tulowy Ultra (do 5 J)',
                    area: null,
                    count: 1,
                    price: "od 1650"
                },
                {
                    id: 'row14',
                    content: 'Stellar zabieg na rumień',
                    area: null,
                    count: 1,
                    price: "1500"
                },
                {
                    id: 'row15',
                    content: 'Laser tulowy Ultra (powyżej 5 J)',
                    area: null,
                    count: 1,
                    price: "od 2650"
                },
            ],
        },
    ];

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th className='th__name'>Nazwa zabiegu</th>
                    <th className='th__area'>Obszar działania</th>
                    <th className='th__count'>Liczba zabiegów</th>
                    <th className='th__price'>Cena</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        <tr
                            className={`basic__tr ${activeRows.includes(item.id) ? 'open' : ''}`}
                            onClick={() => handleToggleCollapse(item.id)}
                        >
                            <td className='name__td'>{item.name}</td>
                            <td>{item.operationArea}</td>
                            <td></td>
                            <td>
                                <PlusMinusButton className='plus-minus__button' statePlus={activeRows.includes(item.id)} />
                            </td>
                        </tr>
                        {activeRows.includes(item.id) &&
                            item.rows.map((row) => (
                                <tr key={row.id} className="active-row">
                                    <td className='content__td'>{row.content}</td>
                                    <td className='area__td'>{row.area}</td>
                                    <td className='count__td'>{row.count}</td>
                                    <td className='price__td'>{row.price}</td>
                                </tr>
                            ))}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
