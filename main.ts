let Guest_List: string[] = ["Asad", "Ahmed", "Aliyan"];

for (let i = 0; i < Guest_List.length; i++) {
  console.log(`Dear ${Guest_List[i]} :\n you are invited to dinner!\n`);
}
console.log(`"unfortunately${Guest_List[0]},can't come to dinner"`);
Guest_List[0] = "Azer";
console.log("\nNEW LISTOF INVETATION :\n");
for (let j = 0; j < Guest_List.length; j++) {
  console.log(`Dear ${Guest_List[j]} :\n you are invited to dinner!\n`);
}