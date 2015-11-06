package test;

import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

public class RestPut {

        public static void main(String[] args) throws Exception {
                URL url = new URL("http://sandbox.hortonworks.com:12345/trip_ns:trip_table/car001:time003/trip:duration");
                HttpURLConnection httpCon = (HttpURLConnection) url.openConnection();
                httpCon.setDoOutput(true);
                httpCon.setRequestMethod("PUT");
                httpCon.setRequestProperty("Content-Type", "text/xml");
                httpCon.setRequestProperty("Accept", "application/json");
                OutputStreamWriter out = new OutputStreamWriter(httpCon.getOutputStream());
                out.write("1123");
                out.close();
                httpCon.getInputStream();
                /*
                URL url = new URL("http://sandbox.hortonworks.com:12345/trip_ns:trip_table/car001:time003/trip:passengerc_count");
                HttpURLConnection httpCon = (HttpURLConnection) url.openConnection();
                httpCon.setDoOutput(true);
                httpCon.setRequestMethod("PUT");
                //httpCon.setRequestProperty("Method", "PUT");
                httpCon.setRequestProperty("Content-Type", "text/xml");
                httpCon.setRequestProperty("Accept", "application/json");
                OutputStreamWriter out = new OutputStreamWriter(httpCon.getOutputStream());
                out.write("3");
                out.close();
                httpCon.getInputStream();
                */
        }

}
