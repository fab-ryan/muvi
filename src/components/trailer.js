import WebView from "react-native-webview";

export default function Trailer(props) {
  const { movie } = props;
  return (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${movie}?playlist=${movie}&loop=1&autoplay=1`,
      }}
      style={{ marginTop: 30, borderRadius: 10 }}
      javaScriptEnabled={true}
      scrollEnabled={false}
      allowsFullscreenVideo={true}
      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
    />
  );
}
