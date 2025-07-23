import { useState } from "react";

import LocationViewer from "@/components/LocationViewer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Search, 
  ExternalLink, 
  Crown, 
  Building,
  Camera,
  Clock,
  Star,
  Filter
} from "lucide-react";

export default function HeritagePujas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");

  const bonediBaris = [
    // Sovabazar Area
    {
      id: 1,
      name: "Hathkhola Dutta Bari",
      area: "Sovabazar",
      description: "Historic Dutta family heritage house with traditional Durga Puja celebrations",
      mapLink: "https://www.google.co.in/maps/search/Bonedi+bari+durga+puja+kolkata/@22.5892656,88.3576912,2674m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Traditional Bengali architecture",
      established: "18th Century"
    },
    {
      id: 2,
      name: "Sovabazar Rajbari",
      area: "Sovabazar",
      description: "Royal palace of Raja Nabakrishna Deb & Raja Radhakanta Deb with magnificent celebrations",
      mapLink: "https://www.google.co.in/maps/place/Sovabazar+Rajbati/@22.5965828,88.3663575,19.25z/data=!4m5!3m4!1s0x3a027633ccbc0001:0x91c63cb1189b5816!8m2!3d22.5966135!4d88.3667763?hl=en&entry=yt",
      significance: "Royal Heritage Palace",
      established: "1757"
    },
    {
      id: 3,
      name: "Chhatubabu & Latubabu Bari",
      area: "Sovabazar",
      description: "Ramdulal Nivas - Famous for grand Durga Puja traditions",
      mapLink: "https://www.google.co.in/maps/place/Chhatu+Babu+Latu+Babu+Thakur+Bari+(Ramdulal+Nibas)/@22.5931945,88.364419,946m/data=!3m1!1e3!4m6!3m5!1s0x3a0276351b7b6505:0x79f84a2cca334458!8m2!3d22.5903317!4d88.3644845!16s%2Fg%2F11h9qdqfc1?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Historic Thakur Bari",
      established: "19th Century"
    },
    {
      id: 4,
      name: "Darjeepara Mitra Bari",
      area: "Sovabazar",
      description: "Heritage Mitra family house with authentic Bonedi Bari traditions",
      mapLink: "https://www.google.co.in/maps/place/Dorji+Para+Mitra+Barir+Durga+Puja/@22.5911716,88.3622484,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027793c8303323:0xe5f42f8220ec69cd!8m2!3d22.5911667!4d88.3648233!16s%2Fg%2F11vc92my80?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Traditional Mitra Family Heritage",
      established: "18th Century"
    },
    {
      id: 5,
      name: "Harakutir Ray Banerjee Bari",
      area: "Sovabazar",
      description: "Ray-Banerjee family heritage with exquisite Durga Puja arrangements",
      mapLink: "https://www.google.co.in/maps/place/Harakutir+Ray-Banerjee+Barir+Durga+Pujo/@22.5886456,88.3557297,562m/data=!3m1!1e3!4m6!3m5!1s0x3a0277cae647b961:0x4e210ae0e428f372!8m2!3d22.5885619!4d88.3575862!16s%2Fg%2F11r_wv2bl9?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Aristocratic Heritage",
      established: "19th Century"
    },

    // Bagbazar Area
    {
      id: 6,
      name: "Bagbazar Haldar Bari",
      area: "Bagbazar",
      description: "Historic Haldar family residence with traditional Bonedi Bari Durga Puja",
      mapLink: "https://www.google.co.in/maps/search/Bonedi+bari+durga+puja+kolkata/@22.580825,88.3235104,12722m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Traditional Haldar Heritage",
      established: "18th Century"
    },

    // Central Area
    {
      id: 7,
      name: "Badan Chand Roy Bari",
            area: "Central Avenue",
      description: "Roy family heritage house with magnificent architectural details",
      mapLink: "https://www.google.co.in/maps/place/Badan+Chand+Roy+Bari/@22.5752322,88.3557303,17z/data=!4m6!3m5!1s0x3a0277b14f012d4b:0xdd76600a59e3f05!8m2!3d22.5748514!4d88.3579284!16s%2Fg%2F11gnsz5gwk?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Roy Family Heritage",
      established: "19th Century"
    },
    {
      id: 8,
      name: "Shyamaldhan Dutta Bari",
            area: "Central Avenue",
      description: "Dutta family heritage with traditional Bengali architecture",
      mapLink: "https://www.google.co.in/maps/place/Shyamaldhan+Dutta+Bari/@22.5877322,88.3574556,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277b5550152dd:0xa1eba2da35293cc6!8m2!3d22.5877273!4d88.362069!16s%2Fg%2F11fz9y8gky?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Dutta Family Heritage",
      established: "19th Century"
    },
    {
      id: 9,
      name: "Motilal Seal's Thakurbari",
            area: "Central Avenue",
      description: "Famous Seal family Thakurbari with grand Durga Puja traditions",
      mapLink: "https://www.google.com/maps/place/Motilal+Seal's+Bari/@22.5755923,88.3565643,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e17b12c05f:0xd13226ad73e6b683!8m2!3d22.5755874!4d88.3591392!16s%2Fg%2F11fd7nj_1j?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
      significance: "Seal Family Thakurbari",
      established: "19th Century"
    },

    // Girish Park Area
    {
      id: 10,
      name: "Pathuriaghata Rajbari",
      area: "Girish Park",
      description: "Khelat Ghose's Royal Residence with spectacular heritage architecture",
      mapLink: "https://www.google.co.in/maps/place/Pathuriaghata+Rajbari+(Khelat+Ghose's+Residence)/@22.5887327,88.3539746,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277c9c362b86f:0xb6575ddd5ce9acca!8m2!3d22.5887278!4d88.3565495!16s%2Fg%2F1pp2tyvr3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Royal Palace Heritage",
      established: "18th Century"
    },

    // MG Road Area
    {
      id: 11,
      name: "Chorbagan Mitra Bari",
      area: "MG Road",
      description: "Heritage Mitra family house with traditional Bonedi Bari celebrations",
      mapLink: "https://www.google.co.in/maps/place/Chorbagan+Mitra+Bari/@22.5824068,88.3579228,669m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02779f24773141:0x368a110b0e2ec78d!8m2!3d22.5824066!4d88.3624287!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgERaGVyaXRhZ2VfYnVpbGRpbmeaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTFaMlZFV2t0QkVBRaoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEECAAQLQ!16s%2Fg%2F11f8jsnzjs?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Mitra Family Heritage",
      established: "19th Century"
    },
    {
      id: 12,
      name: "Chorbagan Chatterjee Bari",
      area: "MG Road",
      description: "Chatterjee family heritage house with authentic Bengali traditions",
      mapLink: "https://www.google.co.in/maps/place/Chorbagan+Chatterjee+Bari/@22.5822066,88.3617123,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277339dd39d07:0x395705c2772fc0af!8m2!3d22.5822031!4d88.363533!16s%2Fg%2F11qgzf44wx?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Chatterjee Family Heritage",
      established: "19th Century"
    },
    {
      id: 13,
      name: "Jorasako Shib Krishna Daw Bari",
      area: "MG Road",
      description: "Historic Daw family residence with cultural significance",
      mapLink: "https://www.google.co.in/maps/place/Jorasanko+Shib+Krishna+Daw+Bari/@22.5858473,88.3557785,669m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a0277b5bb6c6f37:0xc33f700bade8e1ce!8m2!3d22.5858473!4d88.3595674!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRMmNDMDNXR3BSUlJBQqoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEECEwQSg!16s%2Fg%2F11b66kmsb1?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Historic Landmark",
      established: "19th Century"
    },

    // Esplanade Area
    {
      id: 14,
      name: "Rani Rashmoni Kachari Bari",
      area: "Esplanade",
      description: "Famous Rani Rashmoni's administrative building with heritage value",
      mapLink: "https://www.google.com/maps/place/Rani+Rashmoni+Kachari+Bari/@22.5620091,88.354064,18z/data=!3m1!4b1!4m6!3m5!1s0x3a0277bb7a866687:0x159e51175b4bdb15!8m2!3d22.562007!4d88.3551466!16s%2Fg%2F11k3mb8lmx?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Royal Administrative Building",
      established: "19th Century"
    },
    {
      id: 15,
      name: "Janbazar Rajbari",
      area: "Esplanade",
      description: "Royal palace with magnificent Durga Puja celebrations",
      mapLink: "https://www.google.com/maps/place/Janbazar+Rajbari/@22.5617914,88.355362,19.25z/data=!4m14!1m7!3m6!1s0x3a0277bb7a866687:0x159e51175b4bdb15!2sRani+Rashmoni+Kachari+Bari!8m2!3d22.562007!4d88.3551466!16s%2Fg%2F11k3mb8lmx!3m5!1s0x3a02779d7bb724df:0xf2cbcc320fa44835!8m2!3d22.562031!4d88.3554856!16s%2Fg%2F11h7_mvmnq?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Royal Heritage Palace",
      established: "18th Century"
    },
    {
      id: 16,
      name: "Bardhan Bari",
      area: "Esplanade",
      description: "Bardhan family heritage house with traditional Durga Puja",
      mapLink: "https://www.google.com/maps/place/Bardhan+Bari+Durga+Puja/@22.5611557,88.3513756,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e65d2fce15:0xc86ace726595e44c!8m2!3d22.5611508!4d88.3539505!16s%2Fg%2F11gv12yt00?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Bardhan Family Heritage",
      established: "19th Century"
    },

    // Thanthania Area
    {
      id: 17,
      name: "Laha Bari",
      area: "Thanthania",
      description: "Historic Laha family residence with cultural heritage",
      mapLink: "https://www.google.co.in/maps/place/1,+Bechu+Chatterjee+St,+Machuabazar,+Kolkata,+West+Bengal+700007/@22.5804198,88.3646063,17.25z/data=!4m6!3m5!1s0x3a02764c6b5c58b5:0x2c83eb19c8f3f661!8m2!3d22.580599!4d88.3664004!16s%2Fg%2F11q2wwfr7k?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Laha Family Heritage",
      established: "19th Century"
    },
    {
      id: 18,
      name: "Thanthania Dutta Bari",
      area: "Thanthania",
      description: "Dutta family heritage house in historic Thanthania area",
      mapLink: "https://www.google.co.in/maps/place/Thanthania+Dutta+Bari/@22.5805798,88.3633098,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277abd15c1fef:0x532570aaff30622f!8m2!3d22.5805749!4d88.3658847!16s%2Fg%2F1tdfg331?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Dutta Family Heritage",
      established: "19th Century"
    },

    // Bhawanipur Area
    {
      id: 19,
      name: "Bhawanipur Mallick Bari",
      area: "Bhawanipur",
      description: "Mallick family heritage house with traditional celebrations",
      mapLink: "https://www.google.co.in/maps/place/Mallick+Bari/@22.5333976,88.3485142,199m/data=!3m1!1e3!4m6!3m5!1s0x3a0277402e786227:0x6195f740cf985bc5!8m2!3d22.5335981!4d88.3490916!16s%2Fg%2F11gvs35x5c?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Mallick Family Heritage",
      established: "19th Century"
    },
    {
      id: 20,
      name: "Bhawanipur De Bari",
      area: "Bhawanipur",
      description: "De family heritage house with aristocratic traditions",
      mapLink: "https://www.google.co.in/maps/place/Bhowanipore+De+Bari/@22.5350672,88.3409957,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02777ea8f8b343:0x44c372338b3144b1!8m2!3d22.5350623!4d88.3435706!16s%2Fg%2F11gl170j6z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "De Family Heritage",
      established: "19th Century"
    },
    {
      id: 21,
      name: "Bhawanipur Mitra Bari",
      area: "Bhawanipur",
      description: "Mitra family heritage residence with cultural significance",
      mapLink: "https://www.google.co.in/maps/place/Mitra+Bari/@22.5323942,88.3495106,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDeuoj50gE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4nqoq_5pzenKU5XquAL3Pcvg92lnUjmA9CKcfyMzcAeJQYjH0SCdZ5sxNUTSNzc3Xb5DrG-2DOyIe6bFf_OIiMn-ItSuhKWjkFwa4622SbDL0AhESDlldQgHaT98FUaLNR53y2b3kQ%3Dw203-h270-k-no!7i6936!8i9248!4m11!1m2!2m1!1sBhawanipur+Mitra+bari!3m7!1s0x3a027737f964503f:0x5dcba69543d2863b!8m2!3d22.5325322!4d88.3496009!10e5!15sChVCaGF3YW5pcHVyIE1pdHJhIGJhcmkaFyIVYmhhd2FuaXB1ciBtaXRyYSBiYXJpkgESYXBhcnRtZW50X2J1aWxkaW5nmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVExTVhGWVMwRjNFQUWqAU4QASoOIgptaXRyYSBiYXJpKAAyHxABIhuTi0gN1nYplQdFQ62rggByFaHALIQzDwR8qIwyGRACIhViaGF3YW5pcHVyIG1pdHJhIGJhcmngAQD6AQQIABAR!16s%2Fg%2F11nxc6bcq6?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Mitra Family Heritage",
      established: "19th Century"
    },
    {
      id: 22,
      name: "Hem Kutir",
      area: "Jatin Das Park",
      description: "Heritage house near Jatin Das Park with cultural importance",
      mapLink: "https://www.google.co.in/maps/place/Hem+Kutir/@22.5272078,88.3474991,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAGbyw7gyi5Y2eh8NUAA7Xl!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4noJitR1kaD_u1R0cqycqgCYPa2ywc0XKagLokhRrWgly7YnIHPckcCsASgrx-XhI4KcVo_Ml-SKJCMyBK5-iVn3Hg9qm6EUFRCejwcFIafjx6hyGZv1l-axpgqv3VN51NeTIiSjyXeaJnMs%3Dw86-h129-k-no!7i4000!8i6000!4m7!3m6!1s0x3a0277374528ed59:0x3557d49d235aa2da!8m2!3d22.5272077!4d88.3474719!10e5!16s%2Fg%2F1ptx_v425?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Cultural Heritage House",
      established: "20th Century"
    },

    // Maniktala Area
    {
      id: 23,
      name: "Maniktala Saha Bari",
      area: "Maniktala",
      description: "Saha family heritage house with grand Durga Puja celebrations",
      mapLink: "https://www.google.co.in/maps/place/SAHA+Bari,+DURGA+PUJA,+Maniktala/@22.5831303,88.3661012,1337m/data=!3m2!1e3!5s0x3a027648436f8277:0xc7c266403b8303dd!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02778f5ea5e051:0x5d22f2339e9e04e7!8m2!3d22.5856359!4d88.3710417!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOc09YSXpjVTlCRUFFqgFWCg0vZy8xMWxmNHcxY183EAEyHxABIhuW3GPy3ZWmr-xHh2W-xurcKj1MtFWuN-zctwoyIhACIh5ib25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGHgAQD6AQUIhQIQNw!16s%2Fg%2F11lkvrhwfm?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Saha Family Heritage",
      established: "19th Century"
    },
    {
      id: 24,
      name: "Durga Bari Banerjee Parivar",
      area: "Maniktala",
      description: "Banerjee family Durga Bari with traditional heritage",
      mapLink: "https://www.google.co.in/maps/place/SAHA+Bari,+DURGA+PUJA,+Maniktala/@22.5831303,88.3661012,1337m/data=!3m2!1e3!5s0x3a027648436f8277:0xc7c266403b8303dd!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02778f5ea5e051:0x5d22f2339e9e04e7!8m2!3d22.5856359!4d88.3710417!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOc09YSXpjVTlCRUFFqgFWCg0vZy8xMWxmNHcxY183EAEyHxABIhuW3GPy3ZWmr-xHh2W-xurcKj1MtFWuN-zctwoyIhACIh5ib25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGHgAQD6AQUIhQIQNw!16s%2Fg%2F11lkvrhwfm?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Banerjee Family Heritage",
      established: "19th Century"
    },

    // Rajabazar Area
    {
      id: 25,
      name: "Harinath Mookerjee Bari",
      area: "Rajabazar",
      description: "Mookerjee family heritage house with cultural significance",
      mapLink: "https://www.google.co.in/maps/place/4,+Kalidas+Singhi+Ln,+Machuabazar,+Kolkata,+West+Bengal+700009/@22.5787762,88.3695843,17.5z/data=!4m6!3m5!1s0x3a02764f9adc2f39:0xac872605ec614ed1!8m2!3d22.5783013!4d88.3717915!16s%2Fg%2F11j6yb6h1n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Mookerjee Family Heritage",
      established: "19th Century"
    },

    // Amherst Street Area
    {
      id: 26,
      name: "Chandra Bari",
      area: "Amherst Street",
      description: "Chandra family heritage house with traditional Bonedi Bari features",
      mapLink: "https://www.google.co.in/maps/place/24,+Bechu+Chatterjee+St,+Machuabazar,+Kolkata,+West+Bengal+700009/@22.5806405,88.3658982,18.75z/data=!4m6!3m5!1s0x3a02764e9488c815:0xd9b911a31de52695!8m2!3d22.5800302!4d88.3686908!16s%2Fg%2F11h_fsf34k?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Chandra Family Heritage",
      established: "19th Century"
    },

    // Behala Area
    {
      id: 27,
      name: "Amrendra Bhawan Roy Family",
      area: "Behala",
      description: "Roy family heritage house in Behala with traditional celebrations",
      mapLink: "https://www.google.co.in/maps/place/Amarendra+Bhavan+Durga+Puja+(Roy+House+Puja)/@22.5023436,88.3112867,1892m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a027bf22c581e17:0x29092556ac4cffe5!8m2!3d22.5015817!4d88.318873!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgERaGVyaXRhZ2VfYnVpbGRpbmeaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTFNblEyVVdSUkVBRaoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEFCJwGEEg!16s%2Fg%2F11fn2p5zfh?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Roy Family Heritage",
      established: "20th Century"
    },
    {
      id: 28,
      name: "Sabarna Roychowdhury Atchala Bari",
      area: "Behala Sakherbazar",
      description: "Historic Sabarna Roychowdhury family Atchala Bari with royal heritage",
      mapLink: "https://www.google.co.in/maps/place/SABARNA+ROY+CHOWDHURY+ATTCHALA+BARI/@22.4798771,88.3064281,16z/data=!3m1!4b1!4m6!3m5!1s0x3a027a6626c80eb7:0xc9844e215327f601!8m2!3d22.4798771!4d88.3064281!16s%2Fg%2F1tgmtpgz?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      significance: "Royal Atchala Heritage",
      established: "18th Century"
    }
  ];

  const areas = [
    "all",
    "Sovabazar",
    "Bagbazar", 
        "Central Avenue",
    "Girish Park",
    "MG Road",
    "Esplanade",
    "Thanthania",
    "Bhawanipur",
    "Jatin Das Park",
    "Maniktala",
    "Rajabazar",
    "Amherst Street",
    "Behala",
    "Behala Sakherbazar"
  ];

  const filteredBaris = bonediBaris.filter(bari => {
    const matchesSearch = bari.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bari.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "all" || bari.area === selectedArea;
    return matchesSearch && matchesArea;
  });

  const getAreaColor = (area: string) => {
    const colors = {
      "Sovabazar": "from-purple-500 to-purple-600",
      "Bagbazar": "from-blue-500 to-blue-600",
            "Central Avenue": "from-green-500 to-green-600",
      "Girish Park": "from-red-500 to-red-600",
      "MG Road": "from-yellow-500 to-yellow-600",
      "Esplanade": "from-pink-500 to-pink-600",
      "Thanthania": "from-indigo-500 to-indigo-600",
      "Bhawanipur": "from-teal-500 to-teal-600",
      "Jatin Das Park": "from-orange-500 to-orange-600",
      "Maniktala": "from-cyan-500 to-cyan-600",
      "Rajabazar": "from-emerald-500 to-emerald-600",
      "Amherst Street": "from-rose-500 to-rose-600",
      "Behala": "from-violet-500 to-violet-600",
      "Behala Sakherbazar": "from-amber-500 to-amber-600"
    };
    return colors[area as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 shadow-2xl">
                <Crown className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                Heritage Pujas
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
              Explore the magnificent Bonedi Baris of Kolkata - ancestral homes where Durga Puja traditions 
              have been preserved for centuries with unmatched grandeur and cultural authenticity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-amber-200/50">
              <div className="text-3xl font-bold text-amber-700 mb-2">{bonediBaris.length}</div>
              <div className="text-amber-600 font-medium">Heritage Houses</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-amber-200/50">
              <div className="text-3xl font-bold text-amber-700 mb-2">300+</div>
              <div className="text-amber-600 font-medium">Years of Tradition</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-amber-200/50">
              <div className="text-3xl font-bold text-amber-700 mb-2">15+</div>
              <div className="text-amber-600 font-medium">Historic Areas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-amber-200/50">
              <div className="text-3xl font-bold text-amber-700 mb-2">100+</div>
              <div className="text-amber-600 font-medium">Documented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <Input
                placeholder="Search heritage houses..."
                className="pl-12 border-amber-300 focus:border-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Area Filter */}
            <div className="flex flex-wrap gap-2">
              {areas.slice(0, 8).map((area) => (
                <Button
                  key={area}
                  variant={selectedArea === area ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedArea(area)}
                  className={`whitespace-nowrap ${
                    selectedArea === area 
                      ? 'bg-amber-600 hover:bg-amber-700' 
                      : 'border-amber-300 text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {area === "all" ? "All Areas" : area}
                </Button>
              ))}
              {areas.length > 8 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  More
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Houses Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {filteredBaris.length} Heritage Houses Found
            </h2>
            <p className="text-gray-600">
              Discover Kolkata's most prestigious Bonedi Bari Durga Puja celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBaris.map((bari) => (
              <Card key={bari.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover-lift bg-white border-amber-200/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                        {bari.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`bg-gradient-to-r ${getAreaColor(bari.area)} text-white border-0`}>
                          <MapPin className="h-3 w-3 mr-1" />
                          {bari.area}
                        </Badge>
                        <Badge variant="outline" className="border-amber-300 text-amber-700">
                          <Clock className="h-3 w-3 mr-1" />
                          {bari.established}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-amber-500">
                      <Building className="h-6 w-6" />
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {bari.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-amber-600" />
                      <span className="font-semibold text-amber-800">Heritage Significance</span>
                    </div>
                    <p className="text-sm text-amber-700">{bari.significance}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
                                            asChild
                                        >
                      <LocationViewer
                        locationName={bari.name}
                        address={`${bari.name}, ${bari.area}, Kolkata`}
                        description={bari.description}
                        buttonText="View Location"
                        buttonVariant="ghost"
                        buttonSize="sm"
                        className="h-full w-full flex items-center justify-center"
                      />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBaris.length === 0 && (
            <div className="text-center py-16">
              <div className="text-amber-400 mb-4">
                <Building className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No heritage houses found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => { setSearchTerm(""); setSelectedArea("all"); }}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Heritage
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Join me in documenting these magnificent heritage houses and their timeless Durga Puja traditions. 
            Each Bonedi Bari tells a unique story of Bengali aristocratic culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3 bg-white text-amber-700 hover:bg-amber-50 shadow-xl"
            >
              <Camera className="mr-2 h-5 w-5" />
              Book Documentation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-amber-700 backdrop-blur-sm"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
