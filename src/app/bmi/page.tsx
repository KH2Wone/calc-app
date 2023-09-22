import Link from "next/link";
import MoreDescription from "../components/MoreDescription";
import Info from "./../../../public/image/icon/info.svg";

const BMI_DESC =
  "체질량 지수는 인간의 비만도를 나타내는 지수로, 체중과 키의 관계로 계산된다. 케틀레지수라고도 한다. 체질량지수는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값이며 과체중 또는 비만을 판정하기에 부정확한 방법이라는 지적이 있다.";

const BMI_INFO = {
  underweight: 18.5,
  normal: 22.9,
  preObesity: 24.9,
  obesity1: 29.9,
  Obesity2: 34.9,
  Obesity3: 35,
};

const Bmi = () => {
  return (
    <div>
      <header>BMI Calculator</header>
      <aside className="flex gap-1">
        What&apos;s the BMI?
        <MoreDescription content={BMI_DESC} icon={Info} />
      </aside>
      <main>
        <section>
          <h3>Information</h3>
          <ul>
            <li>
              <h5>Gender</h5>
              <label htmlFor="female">
                <input name="gender" type="radio" id="female" />
                Female
              </label>
              <label htmlFor="male">
                <input name="gender" type="radio" id="male" />
                Male
              </label>
            </li>
            <li>
              <label htmlFor="height">
                Height <input type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="weight">
                Weight <input type="text" />
              </label>
            </li>
          </ul>
        </section>
        <section>
          <h3>Result</h3>
          <div>
            나의 체질량 지수는 <em>~값~</em>으로 <em>어쩌구체중</em>입니다.{" "}
            <br />
            동반 질환의 위험도는 <em>보통?</em>입니다.
          </div>
        </section>
      </main>
      <footer>
        <Link
          href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5292"
          target="_blank"
          rel="noopener noreferrer"
        >
          질병관리본부
        </Link>
        의 진단 기준입니다.
      </footer>
    </div>
  );
};

export default Bmi;
