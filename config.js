export const MoodContractAddress = "0x1ADC5CF8868D67fff1b3B70BeF7Ba8f925998b5b";
export const MoodContractABI = [
  {
    inputs: [{ internalType: "string", name: "_mood", type: "string" }],
    name: "setMood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMood",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];