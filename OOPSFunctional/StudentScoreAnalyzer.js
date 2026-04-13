class StudentAnalyzer {
  constructor(students) {
    this.students = students;
  }

  getAverage() {
    const total = this.students.reduce((sum, s) => sum + s.marks, 0);
    return total / this.students.length;
  }

  getTopScorer() {
    return this.students.reduce((top, s) => {
      return s.marks > top.marks ? s : top;
    });
  }

  getPassedStudents() {
    return this.students.filter(s => s.marks > 60);
  }
}

const students = [
  { name: "A", marks: 50 },
  { name: "B", marks: 80 },
  { name: "C", marks: 70 }
];

const analyzer = new StudentAnalyzer(students);

console.log("Average : ", analyzer.getAverage());
console.log("Top Scorer : ", analyzer.getTopScorer());
console.log("Passed Students: ", analyzer.getPassedStudents());