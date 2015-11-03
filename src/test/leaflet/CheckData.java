package test.leaflet;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Set;
import java.util.TreeSet;

public class CheckData {

        public static void main(String[] args) throws Exception {
                Set<String> carTime = new TreeSet<String>();
                BufferedReader br = new BufferedReader(new FileReader("cars.csv"));
                String line;
                while ((line = br.readLine()) != null) {
                        if (line.trim().isEmpty()) continue;
                        String[] splits = line.split(",");
                        String medallion = splits[0];
                        if (!medallion.equals("BB8B5987269FE82C5A9CAA78DE6E2F8D")) continue;
                        String pickupTime = splits[5];
                        String dropoffTime = splits[6];
                        String twoTime = pickupTime + "," + dropoffTime;
                        carTime.add(twoTime);
                }
                br.close();
                for (String time: carTime) {
                        System.out.println(time);
                }
        }

}
