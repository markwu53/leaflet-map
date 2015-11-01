package test.leaflet;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class SelectData {

        public static void main(String[] args) throws Exception {
                new SelectData().go();
        }

        public void go() throws Exception {
                //findCars();
                filterCars();
        }

        public void findCars() throws Exception {
                BufferedReader br = new BufferedReader(new FileReader("/Users/wum2/Programs/leaflet-map/trip_data_1.csv"));
                String line;
                int carCount = 0;
                Map<String, Integer> carFreq = new HashMap<String, Integer>();
                Set<String> cars = new HashSet<String>();

                br.readLine(); // skip header
                while ((line = br.readLine()) != null) {
                        String[] splits = line.split(",", -1);
                        String medallion = splits[0];
                        if (!carFreq.containsKey(medallion)) {
                                carFreq.put(medallion, 1);
                        } else {
                                int count = carFreq.get(medallion);
                                carFreq.put(medallion, count + 1);
                                if (count + 1 >= 100) {
                                        if (!cars.contains(medallion)) {
                                                System.out.println(medallion);
                                                cars.add(medallion);
                                                carCount ++;
                                                if (carCount >= 10) {
                                                        break;
                                                }
                                        }
                                }
                        }
                }

                br.close();
        }
 
        public void filterCars() throws Exception {
                Map<String, Integer> carFreq = new HashMap<String, Integer>();
                {
                        String cars = "D5C7CD37EA4D372D00F0A681CDC93F11 849E486825860106403FB991A763BCC3 B6585890F68EE02702F32DECDEABC2A8 0B3D3D51C78E944F68DC04209E86D5F7 FCFFBC6FFBA23178D9C569CAE435020F 9C79E336DE8988E71F83F98D4E9210DF 171FD91CBF0D6FABF499A9452A4950D5 4F7C132D3130970CFA892CC858F5ECB5 B0E3A2CF1A7FDC886F9C776301C42F5B BB8B5987269FE82C5A9CAA78DE6E2F8D";
                        String[] splits = cars.split(" ");
                        for (String car: splits) {
                                carFreq.put(car, 0);
                        }
                }
                PrintWriter pw = new PrintWriter(new FileWriter("cars.csv"));
                BufferedReader br = new BufferedReader(new FileReader("/Users/wum2/Programs/leaflet-map/trip_data_1.csv"));
                String line;
                br.readLine(); // skip header
                Set<String> cars = new HashSet<String>();
                while ((line = br.readLine()) != null) {
                        String[] splits = line.split(",", -1);
                        String medallion = splits[0];
                        if (!carFreq.containsKey(medallion)) {
                        } else {
                                pw.println(line);
                                int count = carFreq.get(medallion);
                                carFreq.put(medallion, count + 1);
                                if (count + 1 >= 100) {
                                        if (!cars.contains(medallion)) {
                                                cars.add(medallion);
                                                if (cars.size() == 10) {
                                                        break;
                                                }
                                        }
                                }
                        }
                }

                br.close();
                pw.close();
        }

	//omnivore.kml('resources/WorkingTracks/kml/track2.kml')
	//omnivore.kml('resources/WorkingTracks/kml/track4.kml')
	//omnivore.kml('resources/WorkingTracks/kml/track5.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-10_15_16_32.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-10_17_59_14.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-11_09_18_33.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-12_13_53_50.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-12_19_57_45.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-14_09_48_18.kml')
	//omnivore.kml('resources/WorkingTracks/kml/2015-09-09_15_46_52.kml')
}
