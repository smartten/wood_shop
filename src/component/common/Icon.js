import {
  SmileOutlined,
  ClockCircleOutlined,
  LikeOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const ICONS = {
  smile: SmileOutlined,
  clock: ClockCircleOutlined,
  like: LikeOutlined,
  phone: PhoneOutlined,
  mail: MailOutlined,
  home: HomeOutlined,
  environment: EnvironmentOutlined,
  instagram: InstagramOutlined,
  twitter: TwitterOutlined,
  facebook: FacebookOutlined,
  youtube: YoutubeOutlined,
};

function Icon({ name }) {
  const Component = ICONS[name];
  return Component ? <Component /> : null;
}

export default Icon;
