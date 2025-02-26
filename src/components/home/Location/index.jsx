import daLat from "../../../assets/locations/da-lat.jpg";
import haNoi from "../../../assets/locations/ha-noi.jpg";
import hcmc from "../../../assets/locations/ho-chi-minh-city.jpg";
import hoiAn from "../../../assets/locations/hoi-an.jpg";
import nhaTrang from "../../../assets/locations/nha-trang.jpg";
import quangNinh from "../../../assets/locations/quang-ninh.jpg";
import styles from "./styles.module.css";

export default function Location() {
  return (
    <section id="location" className="location py-4">
      <div className="container">
        <h1 className="text-center text-md-start">Where to find us?</h1>
        <div className="row py-3">
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={haNoi} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Hà Nội</div>
                <div className={styles.box_content}>50+ cars</div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={hcmc} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Hồ Chí Minh</div>
                <div className={styles.box_content}>100+ cars</div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={hoiAn} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Đà Nẵng</div>
                <div className={styles.box_content}>50+ cars</div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={nhaTrang} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Nha Trang</div>
                <div className={styles.box_content}>50+ cars</div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={daLat} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Đà Lạt</div>
                <div className={styles.box_content}>50+ cars</div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-6 mt-3">
            <div className={styles.box}>
              <div className={styles.box_bg}>
                <img src={quangNinh} alt="Location" />
              </div>
              <div className={styles.box_body}>
                <div className={styles.box_title}>Quảng Ninh</div>
                <div className={styles.box_content}>50+ cars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
