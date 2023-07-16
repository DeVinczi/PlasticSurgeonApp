import React from 'react'

const Table = () => {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Nazwa zabiegu</th>
                    <th>Obszar działania</th>
                    <th>Liczba zabiegów</th>

                    <th>Cena</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>KONSULTACJA Lekarz chirurgii plastycznej
                    </td>
                    <td>Twarz</td>
                    <td>1</td>
                    <td>400</td>
                </tr>
                <tr class="active-row">
                    <td>Laparoskopowa rekonstrukcja rozejścia kresy białej
                    </td>
                    <td>Twarz</td>
                    <td>1</td>
                    <td>400</td>
                </tr>

                <tr class>
                    <td>Foxy Eyes</td>
                    <td>Piersi</td>
                    <td></td>
                    <td>od 5000</td>
                </tr>
                <tr class>
                    <td>Operacja poporodowej niewydolności przedniej ściany brzucha (PPAWIS)</td>
                    <td>Policzki</td>
                    <td>1</td>
                    <td>od 5000</td>
                </tr>
                <tr class>
                    <td>Operacja poporodowej niewydolności przedniej ściany brzucha (PPAWIS)</td>
                    <td>Nogi</td>
                    <td>1</td>
                    <td>od 5000</td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table
