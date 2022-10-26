import React, {Component} from 'react';

import FormMakanan from '../Form/FormMakanan';
import DaftarMakanan from '../Lib/DaftarMakanan';

const ListMakanan = [
	{
		NamaMakanan: "Nasi Padang",
		Harga: "20.000",
	},
	{
		NamaMakanan: "Sat",
		Harga: "20.000",
	},
	{
		NamaMakanan: "Soto",
		Harga: "10.000",
	},
	{
		NamaMakanan: "Uduk",
		Harga: "10.000",
	},
	{
		NamaMakanan: "Nasi Kuning",
		Harga: "15.000",
	},
	{
		NamaMakanan: "Ayam Geprek",
		Harga: "15.000",
	},
	{
		NamaMakanan: "Pecel lele",
		Harga: "15.000",
	},
	{
		NamaMakanan: "Pecel",
		Harga: "10.000",
	},
	{
		NamaMakanan: "Mie Ayam",
		Harga: "10.000",
	}

];

class MenuMakanan extends Component {
render(){
	return(
		<div>
		  <h3>Daftar Makanan Favorit</h3>
		  <table>
		    <tbody>
		      <tr>
		        {DaftarMakanan.map((data,index) => {
		          return(
		            <td key={data}>
		              <img src={data.img} alt="Produk Makanan" width="150" height="100"/>
		              <center>
		                <p>{data.NamaMakanan}</p>
		                <p>Harga : Rp. {data.Harga}</p>
		              </center>
		            </td>
		          )
		        })}
		      </tr>
		    </tbody>
		  </table>
		  <h4>List Makanan</h4>
			{ListMakanan.map((value, index) =>{
			  return(
			  <div key="value">
			    <p>
			      {value.NamaMakanan} | Harga : Rp. {value.Harga}
			    </p>
			  </div>
			  );
			})};
			<FormMakanan />
		</div>

		)
}
}
export default MenuMakanan;