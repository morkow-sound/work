import logo from './img/Polygon 1.png'
import shopingcart from './img/shopping-cart 1.png'
import search from './img/search 1.png'
import strelka_prev from './img/strelcka_prev.png'
import srelka_next from './img/strelcka_next.png'
import fast1 from './img/fast1.png'
import service from './img/service.png'
import plant1 from './img/plant1.png'
import dollar_symbol1 from './img/dollar-symbol1.png'
import './css/style.css';

function App() {
	return (

		<div className="body_flexbox">
			<div className="wrapper">
				<div className="body_flex_item">
					<div className="menu_container">
						<a href="#" className="size_for_logo">
							<img src={logo} alt={"logo"} className="background_for_icon" />
							<p className="letter_for_icon">P</p>
						</a>
						<div className="search_and_buy_container">
							<div className="buy_container">
								<button style={{ display: 'flex' }}>
									<img src={shopingcart} alt={"shoping-cart"} className="buy_container_position" />
								</button>
							</div>
							<div className="search_container">
								<button style={{ display: 'flex' }}>
									<img src={search} alt={"search"} className="search_container_position" />
								</button>
							</div>
						</div>
						<div className="button_container">
							<button className="sign_in_button">
								<p className="sign_in_button_text">Sign In</p>
							</button>
							<button className="sign_up_button">
								<p className="sign_up_button_text">Sign Up</p>
							</button>
						</div>
					</div>

					<div className="body_flex_element">
						<div className="block_1">
							<img src="https://s3-alpha-sig.figma.com/img/583b/ca98/f2aa50511e0c640b9cb97d0e84f4f3e0?Expires=1634515200&Signature=Dnlw1WqHKJdEsjKBOikNHwEPL0PZKOkT~SkUo6etlz9UNBGtAbTsBuIsEUR1rskvketsZfBNZ2e9FmNOKKV5lZBTpcWHSE4brLh2n5bEI84ilVA7G~qDEUwXdPOcsK5Q4JhDIZHdndPbKJhDPI8p0eTYC1Dafd7-BAnFBR7ggWPkImDAxlBWWVqhuHlO5m44tKs601qK7gsrvzvn48nTUvEkJxt6EbZ1DVLMpHzNr6cyESglxIDfC4gw~~0XersrCVhRGbEAg8Vf7x0Q25fbg1D9~s020ja2-JcjF2zbPx-0r9uaiWRIJKkWV0FnHntwTbscQcpdlyiJFpJC9mixrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img" />
						</div>
						<div className="block_2">
							<div className="h1_block">Kembang Flower Mantap</div>
							<div className="h1_p_block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
							<div className="button_next_prev_container">
								<button className="prev_button">
									<div className="blok_prev_container">
										<div className="strelka_prev_container">
											<img src={strelka_prev} alt={"strelka_prev"} className="img_prev" />
											<p className="p_prev">Previous</p>
										</div>
										<h3 className="h3_prev">Kaktus Plant</h3>
									</div>
								</button>
								<button className="next_button">
									<div className="blok_next_container">
										<div className="strelka_next_container">
											<p className="p_next">Next</p>
											<img src={srelka_next} alt={"srelka_next"} className="img_next" />
										</div>
										<h3 className="h3_next">Rahasia Plant</h3>
									</div>
								</button>
							</div>
						</div>
					</div>

					<div className="body_flex_element_2">
						<div className="block_3">
							<button className="button_for_iteams">
								<div className="block_3_colum">
									<div className="block_3_colum_header">
										<img src={fast1} alt="block_3_colum_img" className="block_3_colum_img" />
										<h4 className="block_3_colum_h4">Fast Delivery</h4>
									</div>
									<p className="block_3_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								</div>
							</button>
						</div>
						<div className="block_3">
							<button className="button_for_iteams">
								<div className="block_3_colum">
									<div className="block_3_colum_header">
										<img src={service} alt="block_3_colum_img" className="block_3_colum_img" />
										<h4 className="block_3_colum_h4">Great Customer Service</h4>
									</div>
									<p className="block_3_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								</div>
							</button>
						</div>
						<div className="block_3">
							<button className="button_for_iteams">
								<div className="block_3_colum">
									<div className="block_3_colum_header">
										<img src={plant1} alt="block_3_colum_img" className="block_3_colum_img" />
										<h4 className="block_3_colum_h4">Original Plants</h4>
									</div>
									<p className="block_3_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								</div>
							</button>
						</div>
						<div className="block_3">
							<button className="button_for_iteams">
								<div className="block_3_colum">
									<div className="block_3_colum_header">
										<img src={dollar_symbol1} alt="block_3_colum_img" className="block_3_colum_img" />
										<h4 className="block_3_colum_h4">Affordable Price</h4>
									</div>
									<p className="block_3_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								</div>
							</button>
						</div>
					</div>

					<div className="body_flex_element_4">
						<div className="block_4_colum_header">
							<h5 className="h5_for_plants">Featured Plants</h5>
							<div>
								<select name="select" className="select_for_block_4">
									<option value="value1" defaultValue="selected">Значение 1</option>
									<option value="value2" >Значение 2</option>
									<option value="value3">Значение 3</option>
								</select>
							</div>
						</div>
						<div className="liner_block_4"></div>
					</div>
					<div className="body_flex_element_2">
						<div className="block_5">
							<button className="button_for_iteams">
								<div className="block_5_colum">
									<div className="options_img_5">
										<img src="https://s3-alpha-sig.figma.com/img/08e6/cf70/575890e65caaef650d40e84946ee474f?Expires=1635120000&Signature=O4HkX75x-jvlUoz6HOp-xgewhGGn2wCSAgnbcmPZpypNEh1gDASVkMKm3bKrFm9h71CrNB4URtm7aDSOkZgSTAOJIu6-md13ZiGSYK37T2kmAHqmA7GE98-4XfXDEcE0sQU6PA-BJh8Hb55zAVjA8o~HdL-oJXvaccGRHCSBk0LFU2OAqRUeGU3CFC3kFfVwHSp9eeQSyoGWl3L-u-37czsS85zZy1HiKRO6K3pb9APkNnd-vq5GD9lv1veMnKvzRbWzxRJJ5996WyQCuTnEsKJTfyTtAtask-n~Zsv1fZJELSgp6VYF2kIiS3caz0JD0jH1sbjd0wmKFIdTJ1GOOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_url options_img_url_1" />
									</div>
									<h4 className="block_5_colum_h4">Kaktus Plants</h4>

									<p className="block_5_p">IDR 85.000</p>
								</div>
							</button>
						</div>

						<div className="block_5">
							<button className="button_for_iteams">
								<div className="block_5_colum">
									<div className="options_img_5">
										<img src="https://s3-alpha-sig.figma.com/img/d3c7/4fb7/8e9ba4279a243b4e3668b4436154c3b5?Expires=1635120000&Signature=TnxmWlrC3Zkqvd0eimBgdFeOmA51c154SNMj-M9nFTqfIyp9tOvFoS7O~rpGMzxD009OJ1CE41JybWVp0qc~4bSPJGY~nOsS~FeKnnmzmJ6ixTwGEXlbbc-3YjIqPdFDDSTY1p1QlvKagnnEhTd~VmEcGKvqtYCalcwpgUMRehlhg7TVNGWHRXgSgChmnAbU-g0doGmRh9VHKCHtKwYohKQipxLHb1JIu953fhSHnuWBAVFH0fhudA4h-3NWePxs9B9tbUVM7hXU-NRZG2A-t6FWlBR3qu9Quo0wALLgUo7ksV5uuDzHIUDfK60vEYD3KxE~Jtku1UacdNLloskbWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_url options_img_url_2" />
									</div>
									<h4 className="block_5_colum_h4">Kaktus Plants</h4>

									<p className="block_5_p">IDR 85.000</p>
								</div>
							</button>
						</div>

						<div className="block_5">
							<button className="button_for_iteams">
								<div className="block_5_colum">
									<div className="options_img_5">
										<img src="https://s3-alpha-sig.figma.com/img/058b/6f7a/b6c75566d7e22f28b761ad973c2fb8c6?Expires=1635120000&Signature=KkwHHXHOLVQDSNxccvmy7KjQ70~Q1ft7bIjv8p33m8VVto2Vj2vU2cL~lj8aAhnlswRbFkxFOT96DXKlll1kGnSn7za3n8C5BmxuHkZAPd-xstlwq2L7iOlWpEoPJwwoo0OWpmangwnMXFlT89ydlBk~0~T~zqCiXO0aThUMDNbA0YUPwkXcal~5owO7nBAMyFqAgW9RTb9Ba9Dhd3eafbbJAmfb9YHb-gx3H4ZwrAM6N6HuPvb14FUnERvgG-kUMRQLE0fxQuwqLFq1imf494h9PIvkjByMbPNKCovHvE8qx~aCXgOtDUjlMcv7g5NB9TggYCJbIwUyRa-eY~yKPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_url options_img_url_3" />
									</div>
									<h4 className="block_5_colum_h4">Kaktus Plants</h4>

									<p className="block_5_p">IDR 85.000</p>
								</div>
							</button>
						</div>

						<div className="block_5">
							<button className="button_for_iteams">
								<div className="block_5_colum">
									<div className="options_img_5">
										<img src="https://s3-alpha-sig.figma.com/img/4280/3fc4/2241ce35bc14f0edab4a7545c7fe960d?Expires=1635120000&Signature=F3HDybPvtcb0ZTm6DP36yjCyZe0UF-TDyerez6XXIGd6bTE-3Olh5mBi54OaH1DDZtFMfEjHHrZR2CyslV5M3xxugVcPJ7-D3AsL8inN9nlj5op9OJU-TrI-XsRpnC72qive4P2zvDuQzEVV5eD0yTHFeBinq7UBVvKniSjDqdwr1wXo2sQg7PWCRWJ2gujBEK39rAHMPLR5Maoo1O6XEQV0sVo5bxM0-9Bx0rY9ihPLqDzeCJfDpBQZHqciwKd3eoZ-4sM9RZlIfaHAzbVP-tMXNbW~0FjFNQYFGpE2pRbjUDB4NfX-QwgFgj0ZARmr107ECr6URlRV4q4ILszOvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_url options_img_url_4" />
									</div>
									<h4 className="block_5_colum_h4">Kaktus Plants</h4>

									<p className="block_5_p">IDR 85.000</p>
								</div>
							</button>
						</div>

						<div className="block_5">
							<button className="button_for_iteams">
								<div className="block_5_colum">
									<div className="options_img_5">
										<img src="https://s3-alpha-sig.figma.com/img/d713/26ed/f4c6dc0cb53c6749ad60d91e144c93b7?Expires=1635120000&Signature=CsyAZJRSm6sDbkuYSVvol2xxI1pPPVJgJkwrjZds1a-18D4pHwuE6LKmBK0flm4DRaIId276VINBnxfaf0Zp4oIT~0Rtza3OwVn90yBKPFrSJiar~zL0v~ggpVGtQYLeELRlhXwYQ5qsUUgX5jFCQ23sT9in-y6THg50-4~47gg74wYKVrA6v04Z3QwrU2LHN~EeSdHiDACrTCtJukYR25gmk59HVOfhZrg7zYkwLm2GXb5O6rhTkNMcD-ZCMHgFodv6hij1cen8jdlaAI2fUvlhCwHuuBgm3QDwsifXUq4Wm-8ZOWrTKKqTGyLDrwU-JIA0G9up8szMkm5hr1mfmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_url options_img_url_5" />
									</div>
									<h4 className="block_5_colum_h4">Kaktus Plants</h4>

									<p className="block_5_p">IDR 85.000</p>
								</div>
							</button>
						</div>

					</div>

					<div className="body_flex_element_2 body_flex_element_center">

						<div className="block_6">
							<div className="block_5_colum">
								<div className="block_6_text">
									<h5 className="block_5_colum_h5">Buy more plants, it helps you to be relaxed</h5>

									<p className="block_6_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
								</div>
								<div className="options_img_block_6_1">
									<img src="https://s3-alpha-sig.figma.com/img/1a98/95f1/a725415bcf5a227fd5c96533ca6af688?Expires=1635120000&Signature=esdPkZpiGHTBXDmi9S~wHJO5HiTJeoEiOJ8FL6oCdJ~DQYWbUEiH8pr2ljf7dQwxwIDXclWukWHYBYMAwiN~k25rgkvcXmxiBGHFgEY40fh-uLUI2QBxPaHvi~qd~YfTgO6nlB6~OjbsbdPDe3Efw9ns3cKFNNR49A4xjfhmVggBY-Lnlet66QJqVhtMvwulJ70zpHOS04jprpNkLKBhviqiPCPVeQGfuhuL7BvkI81IYIMqL4E3w56~YK7yURgLBXEIMrzm-fGpd8V6YOLYPprxHuoE1D2pl6zsJj4u9G2YoCXt4-CLx2idENF3VXvwQwstfmPAmB6VGPVVEoy8lg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_6_1" />
								</div>

							</div>
						</div>

						<div className="block_6 img_resize">
							<div className="block_5_colum ">
								<div className="options_img_block_6_2">
									<img src="https://s3-alpha-sig.figma.com/img/d6bf/ff0a/3e17b2a1a57f1961c7b1dff4d7e9d6ce?Expires=1635120000&Signature=gTAf83ifHCs7qQYNO2hEr6cIeWp4jg9M7es2pi~wj9TuwdCAIz0tqRGZBJkPsZmUpagYivNLUrl~LgS11S~uc6ZY0JredDC5ZRZnxaMr98y3fm9ANBo0uM2tgWu4LFlL-sek3JZcawIJrKgS4jsaL~csOCFgcVLO2kPWPpW6DJK8jekExSYzACeRrrizIvUnbT-ZLePdz8g4F5MPIel7xUloT91iCeVNrA6mImajnQuqlBK9yk4NJ-1xpOv4sCIRwSb7a0ZH5ueABw16~k6H1uU6nIa2nhke-bxyP1Pk~vK3vLVAN4-Pl9XOjIJ-sE3mXoldxfmzbGd~Ah5iGzWqcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_6_2" />
								</div>
							</div>
						</div>

					</div>


					<div className="body_flex_element_7">

						<div className="block_background_block_7">
							<div className="block_5_colum">
								<div className="block_7_text">
									<h6 className="block_7_colum_h6">Get your favourites plant on our shop now</h6>

									<button className="button_visit_shop">Visit Shop</button>
								</div>

							</div>
						</div>

						<div className="block_background_block_7">
							<div className="block_5_colum">
								<div className="options_img_block_7_1">
									<img src="https://s3-alpha-sig.figma.com/img/1d63/4ef6/210cabef0ef0f162ef5e8d103d49d662?Expires=1635120000&Signature=UCz4ReBj5N3BjrZ3cWOo4W9HnsG63ZNgIeqGynEsxe4WwCT9Ax7QgocMj96kWJTABqVppZKzCaw~RsDUUbJrOW~DjJoiEniVIiBB-F6G9t95i~Jqdq3ToXS21RvL9R7N7mtnY9xHx4gF0ThuGfw0CpZvqYyfYK5dOTNZHd2TSQ3WGBWDzMgi1BHCAFcbxo2ahI5iEEHookfhn8fFW~SjCpVNnOl-TsBGXe~JdJ0nLcQ819QeNlvHNFuBhFj92U-iYh-YwbrpyQj7fHEJA6wp3u3yeLWoPpNolVB6cja-gHrlnw5I0032blcYu1TSs1avHFC2m8qiAfI1aTyvvwfeng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img/Курсы/1.JPG" className="options_img_7_1" />
								</div>
							</div>
						</div>

					</div>

					<div className="liner_footer" ></div>

					<div className="body_flex_element_footer">



						<div className="block_footer">
							<div className="flex_footer">
								<div className="flex_iteam_footer iteam_footer_1">
									<h6 className="h6_footer_1">plantku</h6>
									<p className="p1_footer_1">Plantku House</p>
									<p className="p2_footer_1">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</p>
								</div>
								<div className="flex_iteam_footer iteam_footer_2">
									<a href="#" className="h6_footer_2"><h6>Perusahaan</h6></a>
									<a href="#" className="p1_footer_2"><p>Tentang Kami</p></a>
									<a href="#" className="p1_footer_2"><p>Hubungi Kami</p></a>
								</div>
								<div className="flex_iteam_footer iteam_footer_3">
									<a href="#" className="h6_footer_2"><h6>Produk</h6></a>
									<a href="#" className="p1_footer_2"><p>Tanaman</p></a>
									<a href="#" className="p1_footer_2"><p>Tanaman Lain</p></a>
								</div>
								<div className="flex_iteam_footer iteam_footer_4">
									<form action="#" method="post" className="form_email" encType="multipart/form-data">
										<h6 className="h6_footer_2">Berlangganan Email Kami</h6>
										<input className="input_email" type="email" lang="en" name="email" id="email" title="Masukan Alamat Email" autoComplete="on" required pattern="(?![_.-])((?![_.-][_.-])[a-z\d_.-]){0,63}[a-z\d]@([/bk/ya/ro]{2}|[/mail/list/live]{4}|[/gmail/inbox/narod/yahoo/lenta]{5}|[/yandex]{6}|[/rambler/outlook/hotmail]{7}|[/internet]{8}|[/myrambler]{9}|[/autorambler]{11})[/.]{1}([/ru/ua/kz/by]{2}|[/net/com]{3})" placeholder="Masukan Alamat Email" />
										<button className="button_email" type="submit" id="submit_button_email" name="submit_button_email" title="Submit">Submit</button>
									</form>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div >

	);
}

export default App;
