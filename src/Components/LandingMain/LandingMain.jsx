import Card from "../Card/Card";

function LandingMain({ products }) {
  return (
    <main>
      <div className="grid-container">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024"
          alt="mobile"
        />

        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729680688/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/Desktop_wbgsf2.png?tr=w-1024"
          alt="purifier"
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024"
          alt="mobile"
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024"
          alt="tv"
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Kitchen_Appliances_yhzevo.png?tr=w-1024"
          alt="kapplicances"
        />
      </div>
      <div className="grid-img-container">
        {products &&
          products.map((item) => {
            return (
              <div className="card">
                <Card item={item} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
export default LandingMain;
