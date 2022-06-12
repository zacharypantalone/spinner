//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = '| ' + '/ ' + '- ' + '\\' + '| ' + '/ ' + '- ' + '\\ ';

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]} `);
  }, 100 * i);
}

// what we did here was removed the "\r" from our spinner variable because it would defeat the purpose
// of refactoring the code. Instead, we used a template literal.

/*setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 2300);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2500); */