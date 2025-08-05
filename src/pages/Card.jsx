import { useEffect, useState } from "react";
import "../css/card.css";
import smallCIcon1 from "../assets/images/smallCIcon1.svg";
import smallCIcon2 from "../assets/images/smallCIcon2.svg";
import smallCIcon3 from "../assets/images/smallCIcon3.svg";
import ProjectLogo from "../assets/images/ProjectLogo.svg";
import cardLocation from "../assets/images/cardLocation.svg";
import instance from "../utils/axios";

const DEFAULT_COORDS = { lat: 36.84, lon: 127.185 };

function Card({ variant = "weather" }) {
  const OWM_KEY = import.meta.env.VITE_OWM_API_KEY;

  const [loading, setLoading] = useState(variant === "weather");
  const [place, setPlace] = useState("현재 위치 없음");
  const [timeText, setTimeText] = useState("");
  const [tempC, setTempC] = useState(null);
  const [weatherLabel, setWeatherLabel] = useState("-");
  const [aqLabel, setAqLabel] = useState("-");

  const aqiToLabel = (aqi) => {
    if (!aqi) return "-";
    if (aqi === 1) return "좋음";
    if (aqi === 2) return "보통";
    if (aqi === 3) return "보통";
    if (aqi === 4) return "나쁨";
    return "매우나쁨";
  };
  const weatherToLabel = (main) => {
    if (!main) return "-";
    const bad = ["Thunderstorm", "Drizzle", "Rain", "Snow"];
    const caution = [
      "Mist",
      "Smoke",
      "Haze",
      "Dust",
      "Fog",
      "Sand",
      "Ash",
      "Squall",
      "Tornado",
    ];
    if (bad.includes(main)) return "나쁨";
    if (caution.includes(main)) return "보통";
    return "좋음";
  };

  const nowText = () => {
    const n = new Date();
    const p = (v) => String(v).padStart(2, "0");
    return `${p(n.getMonth() + 1)}.${p(n.getDate())} ${p(n.getHours())}:${p(
      n.getMinutes()
    )} 기준`;
  };

  const GetWeather = async (lat, lon) => {
    setLoading(true);
    try {
      const w = await instance.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat,
            lon,
            appid: OWM_KEY,
            units: "metric",
            lang: "kr",
          },
        }
      );

      const a = await instance.get(
        `https://api.openweathermap.org/data/2.5/air_pollution`,
        {
          params: { lat, lon, appid: OWM_KEY },
        }
      );

      setPlace(w?.data?.name || "현재 위치");
      setTempC(Math.round((w?.data?.main?.temp ?? 0) * 10) / 10);
      setWeatherLabel(weatherToLabel(w?.data?.weather?.[0]?.main));
      setAqLabel(aqiToLabel(a?.data?.list?.[0]?.main?.aqi));
    } catch (e) {
      console.error(e);
    } finally {
      setTimeText(nowText());
      setLoading(false);
    }
  };

  useEffect(() => {
    if (variant !== "weather") return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => GetWeather(pos.coords.latitude, pos.coords.longitude),
        () => GetWeather(DEFAULT_COORDS.lat, DEFAULT_COORDS.lon),
        { enableHighAccuracy: true, timeout: 7000 }
      );
    } else {
      GetWeather(DEFAULT_COORDS.lat, DEFAULT_COORDS.lon);
    }
  }, [variant]);
  useEffect(() => {
    const tick = () => setTimeText(nowText());
    tick();
    const id = setInterval(tick, 60 * 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={"cardWrapper"}>
      <div className="cardContent">
        {variant === "weather" ? (
          <>
            <div className="cardHeader">
              <span className="place">
                <img src={cardLocation} />
                {place}
              </span>
              <span className="time">{timeText}</span>
            </div>

            <div className="cards">
              <div className="smallC">
                <img className="smallCIcon" src={smallCIcon1} />

                <div className="smallCLabel">날씨</div>
                <div className="smallCValue">
                  {loading ? "-" : weatherLabel}
                </div>
              </div>
              <div className="smallC">
                <img className="smallCIcon" src={smallCIcon2} />
                <div className="smallCLabel">기온</div>
                <div className="smallCValue">
                  {loading || tempC == null ? "-" : `${tempC}℃`}
                </div>
              </div>
              <div className="smallC">
                <img className="smallCIcon" src={smallCIcon3} />
                <div className="smallCLabel">대기수준</div>
                <div className="smallCValue">{loading ? "-" : aqLabel}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="briefHeader">
              <img className="briefAvatar" src={ProjectLogo} />
              <div className="briefTexts">
                <div className="briefTitle">천둥이</div>
                <div className="briefSub">
                  오늘 날씨에 딱! 천둥이 메뉴 브리핑
                </div>
                <div>-</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
