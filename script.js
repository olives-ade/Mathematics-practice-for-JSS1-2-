const curriculum = {
  JSS1: [
    { title: "Whole numbers & place value", unit: "Number & numeration", icon: "01", idea: "Our number system uses ten digits (0–9). A digit's place tells its value: ones, tens, hundreds, thousands, and so on. The value of a digit is the digit multiplied by its place value.", example: { q: "What is the value of 6 in 46,281?", answer: "6,000", steps: ["The 6 is in the thousands place.", "6 × 1,000 = 6,000."] }, practice: { q: "What is the value of 7 in 37,524?", answer: "7,000", steps: ["The 7 is in the thousands place.", "7 × 1,000 = 7,000."] } },
    { title: "Number bases", unit: "Number & numeration", icon: "02", idea: "A base tells you how many digits a number system uses. In base two, the digits are 0 and 1. To convert a whole number from base ten, repeatedly divide by the new base and read the remainders from bottom to top.", example: { q: "Convert 13₁₀ to base two.", answer: "1101₂", steps: ["13 ÷ 2 = 6 remainder 1; 6 ÷ 2 = 3 remainder 0.", "3 ÷ 2 = 1 remainder 1; 1 ÷ 2 = 0 remainder 1.", "Read remainders upwards: 1101₂."] }, practice: { q: "Convert 11₁₀ to base two.", answer: "1011₂", steps: ["11 ÷ 2 = 5 r1; 5 ÷ 2 = 2 r1.", "2 ÷ 2 = 1 r0; 1 ÷ 2 = 0 r1.", "Read upwards: 1011₂."] } },
    { title: "Factors, multiples & primes", unit: "Number & numeration", icon: "03", idea: "A factor divides a number exactly. A multiple is the result of multiplying a number by a whole number. A prime number has exactly two factors: 1 and itself. The highest common factor (HCF) is the largest shared factor; the lowest common multiple (LCM) is the smallest positive shared multiple.", example: { q: "Find the HCF and LCM of 12 and 18.", answer: "HCF = 6; LCM = 36", steps: ["Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The HCF is 6.", "Multiples: 12, 24, 36… and 18, 36… The LCM is 36."] }, practice: { q: "Find the HCF and LCM of 8 and 12.", answer: "HCF = 4; LCM = 24", steps: ["Common factors include 1, 2 and 4, so the HCF is 4.", "The first common positive multiple is 24, so the LCM is 24."] } },
    { title: "Basic operations & order", unit: "Number & numeration", icon: "04", idea: "Add, subtract, multiply and divide whole numbers carefully. For mixed calculations, use the order of operations: brackets first, then multiplication or division from left to right, then addition or subtraction from left to right.", example: { q: "Work out 18 + 4 × 3.", answer: "30", steps: ["Multiply before adding: 4 × 3 = 12.", "18 + 12 = 30."] }, practice: { q: "Work out 24 − 12 ÷ 3.", answer: "20", steps: ["Divide first: 12 ÷ 3 = 4.", "24 − 4 = 20."] } },
    { title: "Fractions", unit: "Number & numeration", icon: "05", idea: "A fraction represents part of a whole. Its numerator is on top and its denominator is below. Simplify by dividing both by their HCF. To add or subtract fractions, first make their denominators the same.", example: { q: "Work out 1/3 + 1/4.", answer: "7/12", steps: ["The lowest common denominator of 3 and 4 is 12.", "1/3 = 4/12 and 1/4 = 3/12.", "4/12 + 3/12 = 7/12."] }, practice: { q: "Work out 2/5 + 1/10.", answer: "1/2", steps: ["2/5 = 4/10, so 4/10 + 1/10 = 5/10.", "Simplify 5/10 by dividing top and bottom by 5: 1/2."] } },
    { title: "Decimals", unit: "Number & numeration", icon: "06", idea: "Digits after a decimal point show tenths, hundredths, thousandths, and so on. Line up decimal points when adding or subtracting. To multiply by 10, 100 or 1,000, move the decimal point right by 1, 2 or 3 places.", example: { q: "Work out 3.75 + 2.6.", answer: "6.35", steps: ["Write 2.6 as 2.60 so the decimal places line up.", "3.75 + 2.60 = 6.35."] }, practice: { q: "Work out 5.2 − 1.85.", answer: "3.35", steps: ["Write 5.2 as 5.20.", "5.20 − 1.85 = 3.35."] } },
    { title: "Fractions, decimals & percentages", unit: "Number & numeration", icon: "07", idea: "Fractions, decimals and percentages are different ways to express parts of a whole. A percentage means 'out of 100'. Convert a fraction to a percentage by multiplying it by 100%; convert a percentage to a decimal by dividing by 100.", example: { q: "Write 3/5 as a percentage.", answer: "60%", steps: ["3 ÷ 5 = 0.6.", "0.6 × 100% = 60%."] }, practice: { q: "Write 0.25 as a fraction in its simplest form and as a percentage.", answer: "1/4 and 25%", steps: ["0.25 = 25/100 = 1/4 after simplifying.", "0.25 × 100% = 25%."] } },
    { title: "Approximation & estimation", unit: "Number & numeration", icon: "08", idea: "Rounding gives a useful nearby value. To round to a given place, look at the digit immediately to its right: 5 or more rounds up; 4 or less leaves the digit unchanged. Estimation helps check whether an answer is reasonable.", example: { q: "Round 6,748 to the nearest hundred.", answer: "6,700", steps: ["The hundreds digit is 7; the tens digit is 4.", "Since 4 is less than 5, keep 7 and change tens and ones to zero: 6,700."] }, practice: { q: "Round 3.786 to 2 decimal places.", answer: "3.79", steps: ["The second decimal place is 8. The next digit is 6.", "Since 6 is at least 5, round 8 up: 3.79."] } },
    { title: "Directed numbers", unit: "Number & numeration", icon: "09", idea: "Positive numbers are greater than zero and negative numbers are less than zero. On a number line, numbers increase as you move right. Adding a negative is like subtracting; subtracting a negative is like adding.", example: { q: "Work out −4 + 9.", answer: "5", steps: ["Start at −4 on the number line.", "Move 9 places right: you land on 5."] }, practice: { q: "Work out 3 − (−5).", answer: "8", steps: ["Subtracting a negative is the same as adding.", "3 − (−5) = 3 + 5 = 8."] } },
    { title: "Ratio", unit: "Number & numeration", icon: "10", idea: "A ratio compares quantities in the same units. Simplify a ratio by dividing every part by their common factor. To share an amount in a ratio, add the ratio parts, find the value of one part, then multiply.", example: { q: "Share 20 sweets in the ratio 2:3.", answer: "8 sweets and 12 sweets", steps: ["There are 2 + 3 = 5 parts altogether.", "One part is 20 ÷ 5 = 4 sweets.", "The shares are 2 × 4 = 8 and 3 × 4 = 12."] }, practice: { q: "Simplify the ratio 15:25.", answer: "3:5", steps: ["The HCF of 15 and 25 is 5.", "Divide both parts by 5: 15:25 = 3:5."] } },
    { title: "Percentage in everyday life", unit: "Number & numeration", icon: "11", idea: "To find a percentage of an amount, write the percentage as a fraction or decimal and multiply. For example, 20% = 0.20. A percentage increase or decrease is calculated from the original amount.", example: { q: "Find 15% of ₦800.", answer: "₦120", steps: ["15% = 15/100 = 0.15.", "0.15 × ₦800 = ₦120."] }, practice: { q: "Find 25% of 360.", answer: "90", steps: ["25% = 1/4.", "360 ÷ 4 = 90."] } },
    { title: "Algebraic expressions", unit: "Algebra", icon: "12", idea: "A letter in algebra stands for a number. A term is a number, a variable, or their product. Collect like terms by adding or subtracting their coefficients; unlike terms cannot be combined.", example: { q: "Simplify 3a + 2a − 4.", answer: "5a − 4", steps: ["3a and 2a are like terms.", "3a + 2a = 5a, so the expression is 5a − 4."] }, practice: { q: "Simplify 7x − 2x + 3.", answer: "5x + 3", steps: ["Combine the like terms: 7x − 2x = 5x.", "The constant 3 stays as it is: 5x + 3."] } },
    { title: "Simple equations", unit: "Algebra", icon: "13", idea: "An equation says two expressions are equal. Solve it by keeping both sides balanced: use the inverse operation to get the unknown by itself. Check by substituting your answer back into the original equation.", example: { q: "Solve x + 7 = 12.", answer: "x = 5", steps: ["Subtract 7 from both sides: x = 12 − 7.", "Therefore x = 5. Check: 5 + 7 = 12."] }, practice: { q: "Solve 3y = 21.", answer: "y = 7", steps: ["Divide both sides by 3: y = 21 ÷ 3.", "Therefore y = 7."] } },
    { title: "Lines, angles & basic shapes", unit: "Geometry", icon: "14", idea: "A right angle is 90°. Angles on a straight line add to 180° and angles around a point add to 360°. A triangle has three sides; a quadrilateral has four. Classify shapes by their sides, angles and properties.", example: { q: "Two angles on a straight line are 65° and x°. Find x.", answer: "115°", steps: ["Angles on a straight line add to 180°.", "x = 180° − 65° = 115°."] }, practice: { q: "Three angles around a point are 90°, 125° and x°. Find x.", answer: "145°", steps: ["Angles around a point add to 360°.", "x = 360° − 90° − 125° = 145°."] } },
    { title: "Perimeter & area", unit: "Measurement", icon: "15", idea: "Perimeter is the total distance around a 2D shape. Area measures the surface inside it. Rectangle: area = length × width. Square: area = side × side. Include the correct units: units for perimeter and square units for area.", example: { q: "Find the perimeter and area of a rectangle 8 cm long and 5 cm wide.", answer: "Perimeter = 26 cm; area = 40 cm²", steps: ["Perimeter = 2 × (8 + 5) = 26 cm.", "Area = 8 × 5 = 40 cm²."] }, practice: { q: "A square has side 6 cm. Find its perimeter and area.", answer: "Perimeter = 24 cm; area = 36 cm²", steps: ["Perimeter = 4 × 6 = 24 cm.", "Area = 6 × 6 = 36 cm²."] } },
    { title: "Length, mass, capacity & time", unit: "Measurement", icon: "16", idea: "Use standard units and convert before calculating: 1 km = 1,000 m, 1 kg = 1,000 g and 1 L = 1,000 mL. For time, 1 hour = 60 minutes and 1 minute = 60 seconds.", example: { q: "Convert 2.4 km to metres.", answer: "2,400 m", steps: ["1 km = 1,000 m.", "2.4 × 1,000 = 2,400 m."] }, practice: { q: "Convert 3,500 g to kilograms.", answer: "3.5 kg", steps: ["1 kg = 1,000 g.", "3,500 ÷ 1,000 = 3.5 kg."] } },
    { title: "Collecting & presenting data", unit: "Statistics", icon: "17", idea: "Data are facts or measurements collected to answer a question. Organise data with a frequency table, then present it using a suitable chart or graph. Give charts a title, label the axes and include a clear scale.", example: { q: "A tally shows 4 pupils like rice, 3 like beans and 5 like yam. How many pupils were asked?", answer: "12 pupils", steps: ["Add the frequencies: 4 + 3 + 5.", "The total is 12 pupils."] }, practice: { q: "A table records 6, 8 and 5 votes for three choices. How many votes were cast?", answer: "19 votes", steps: ["Add the frequencies: 6 + 8 + 5 = 19.", "So 19 votes were cast."] } },
    { title: "Mean, median, mode & range", unit: "Statistics", icon: "18", idea: "The mean is the total divided by how many values there are. The median is the middle value after sorting. The mode occurs most often. The range is the largest value minus the smallest.", example: { q: "Find the mean, median, mode and range of 2, 3, 3, 4, 8.", answer: "Mean = 4; median = 3; mode = 3; range = 6", steps: ["Mean: (2 + 3 + 3 + 4 + 8) ÷ 5 = 20 ÷ 5 = 4.", "The middle value is 3; 3 occurs most often.", "Range = 8 − 2 = 6."] }, practice: { q: "Find the mean and range of 4, 6, 8, 10.", answer: "Mean = 7; range = 6", steps: ["Mean = (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7.", "Range = 10 − 4 = 6."] } }
  ],
  JSS2: [
    { title: "Large numbers & standard form", unit: "Number & numeration", icon: "01", idea: "Standard form writes a number as a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. Move the decimal point until one non-zero digit remains before it; count the places moved to find the power of ten.", example: { q: "Write 45,000 in standard form.", answer: "4.5 × 10⁴", steps: ["Move the decimal point four places left: 45,000 → 4.5.", "Moving left gives a positive power, so 45,000 = 4.5 × 10⁴."] }, practice: { q: "Write 0.0062 in standard form.", answer: "6.2 × 10⁻³", steps: ["Move the decimal point three places right to get 6.2.", "Moving right gives a negative power: 0.0062 = 6.2 × 10⁻³."] } },
    { title: "Factors, multiples & prime factors", unit: "Number & numeration", icon: "02", idea: "Prime factorisation writes a number as a product of prime numbers. Use a factor tree and divide until every branch ends in a prime. Prime factors help you find HCF and LCM efficiently.", example: { q: "Express 60 as a product of prime factors.", answer: "2² × 3 × 5", steps: ["60 = 2 × 30 = 2 × 2 × 15.", "15 = 3 × 5, so 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5."] }, practice: { q: "Express 36 as a product of prime factors.", answer: "2² × 3²", steps: ["36 = 2 × 18 = 2 × 2 × 9.", "9 = 3 × 3, so 36 = 2² × 3²."] } },
    { title: "Fractions & mixed numbers", unit: "Number & numeration", icon: "03", idea: "To multiply fractions, multiply numerators and denominators, then simplify. To divide by a fraction, multiply by its reciprocal. Convert mixed numbers to improper fractions before calculating.", example: { q: "Work out 2/3 × 3/4.", answer: "1/2", steps: ["Multiply: (2 × 3)/(3 × 4) = 6/12.", "Simplify 6/12 by dividing by 6: 1/2."] }, practice: { q: "Work out 3/5 ÷ 2/3.", answer: "9/10", steps: ["Turn division into multiplication by the reciprocal: 3/5 × 3/2.", "Multiply: 9/10."] } },
    { title: "Decimals & recurring decimals", unit: "Number & numeration", icon: "04", idea: "A terminating decimal ends; a recurring decimal repeats a digit or block forever. Convert a terminating decimal to a fraction using place value, then simplify. Use division to check a fraction-to-decimal conversion.", example: { q: "Write 0.75 as a fraction in its simplest form.", answer: "3/4", steps: ["0.75 = 75/100.", "Divide top and bottom by 25: 75/100 = 3/4."] }, practice: { q: "Write 0.4 as a fraction in its simplest form.", answer: "2/5", steps: ["0.4 = 4/10.", "Divide top and bottom by 2: 4/10 = 2/5."] } },
    { title: "Approximation & significant figures", unit: "Number & numeration", icon: "05", idea: "Significant figures start at the first non-zero digit. Keep the required number of significant digits and use the next digit to decide whether to round up. Approximation is useful for estimating and checking calculations.", example: { q: "Round 0.006483 to 2 significant figures.", answer: "0.0065", steps: ["The first two significant digits are 6 and 4; the next digit is 8.", "Round 4 up to 5: 0.0065."] }, practice: { q: "Round 8,746 to 2 significant figures.", answer: "8,700", steps: ["The first two significant digits are 8 and 7; the next digit is 4.", "Keep 87 and replace later digits with zeros: 8,700."] } },
    { title: "Ratio, rate & proportion", unit: "Number & numeration", icon: "06", idea: "A rate compares quantities with different units, such as kilometres per hour. In direct proportion, when one quantity is multiplied by a number, the other is multiplied by the same number. Keep units consistent.", example: { q: "A car travels 150 km in 3 hours. Find its average speed.", answer: "50 km/h", steps: ["Speed = distance ÷ time.", "150 ÷ 3 = 50 km/h."] }, practice: { q: "Four notebooks cost ₦600. At the same rate, how much do 7 cost?", answer: "₦1,050", steps: ["One notebook costs ₦600 ÷ 4 = ₦150.", "Seven cost 7 × ₦150 = ₦1,050."] } },
    { title: "Percentages, profit & loss", unit: "Number & numeration", icon: "07", idea: "Profit = selling price − cost price. Loss = cost price − selling price. Percentage profit or loss is calculated using the cost price: (profit or loss ÷ cost price) × 100%.", example: { q: "An item costs ₦500 and sells for ₦600. Find the percentage profit.", answer: "20%", steps: ["Profit = ₦600 − ₦500 = ₦100.", "Percentage profit = (100 ÷ 500) × 100% = 20%."] }, practice: { q: "A bag bought for ₦800 is sold for ₦720. Find the percentage loss.", answer: "10%", steps: ["Loss = ₦800 − ₦720 = ₦80.", "Percentage loss = (80 ÷ 800) × 100% = 10%."] } },
    { title: "Discount & simple interest", unit: "Number & numeration", icon: "08", idea: "A discount is an amount taken off the marked price. Simple interest is calculated only on the original principal: I = PRT/100, where P is principal, R is annual rate percent and T is time in years.", example: { q: "Find the simple interest on ₦2,000 at 5% per year for 3 years.", answer: "₦300", steps: ["I = PRT/100 = (2,000 × 5 × 3)/100.", "I = ₦300."] }, practice: { q: "A ₦1,500 item has a 10% discount. What is the sale price?", answer: "₦1,350", steps: ["Discount = 10% of ₦1,500 = ₦150.", "Sale price = ₦1,500 − ₦150 = ₦1,350."] } },
    { title: "Directed numbers & operations", unit: "Number & numeration", icon: "09", idea: "For multiplication and division, two numbers with the same sign give a positive answer; different signs give a negative answer. For addition, combine numbers with the same sign, or subtract magnitudes when signs differ.", example: { q: "Work out (−6) × (−4).", answer: "24", steps: ["The signs are the same, so the product is positive.", "6 × 4 = 24."] }, practice: { q: "Work out (−18) ÷ 3.", answer: "−6", steps: ["The signs are different, so the quotient is negative.", "18 ÷ 3 = 6, giving −6."] } },
    { title: "Algebraic expressions & substitution", unit: "Algebra", icon: "10", idea: "Simplify expressions by collecting like terms and using the distributive law: a(b + c) = ab + ac. To evaluate an expression, replace each variable with its given value and follow the order of operations.", example: { q: "Evaluate 2x + 3 when x = 4.", answer: "11", steps: ["Substitute x = 4: 2(4) + 3.", "8 + 3 = 11."] }, practice: { q: "Simplify 3(2a + 1) − a.", answer: "5a + 3", steps: ["Expand the bracket: 6a + 3 − a.", "Collect like terms: 5a + 3."] } },
    { title: "Expansion & factorisation", unit: "Algebra", icon: "11", idea: "Expansion removes brackets by multiplying every term inside by the factor outside. Factorisation reverses this process by taking out the highest common factor shared by all terms.", example: { q: "Expand 4(x + 3).", answer: "4x + 12", steps: ["Multiply 4 by each term inside the bracket.", "4 × x + 4 × 3 = 4x + 12."] }, practice: { q: "Factorise 6y + 12.", answer: "6(y + 2)", steps: ["The highest common factor of 6y and 12 is 6.", "Take out 6: 6y + 12 = 6(y + 2)."] } },
    { title: "Linear equations & inequalities", unit: "Algebra", icon: "12", idea: "Solve a linear equation by doing the same operation to both sides. An inequality compares values using <, >, ≤ or ≥. When multiplying or dividing an inequality by a negative number, reverse its direction.", example: { q: "Solve 2x + 3 = 11.", answer: "x = 4", steps: ["Subtract 3 from both sides: 2x = 8.", "Divide both sides by 2: x = 4."] }, practice: { q: "Solve 3x − 2 = 10.", answer: "x = 4", steps: ["Add 2 to both sides: 3x = 12.", "Divide by 3: x = 4."] } },
    { title: "Sequences & patterns", unit: "Algebra", icon: "13", idea: "A sequence is an ordered list following a pattern. For an arithmetic sequence, the difference between consecutive terms is constant. Continue the pattern by adding or subtracting the common difference.", example: { q: "Write the next two terms: 5, 9, 13, 17, …", answer: "21, 25", steps: ["Each term increases by 4.", "17 + 4 = 21, then 21 + 4 = 25."] }, practice: { q: "Write the next two terms: 30, 25, 20, 15, …", answer: "10, 5", steps: ["Each term decreases by 5.", "15 − 5 = 10, then 10 − 5 = 5."] } },
    { title: "Sets & Venn diagrams", unit: "Algebra", icon: "14", idea: "A set is a collection of distinct items. The union (A ∪ B) contains items in either set; the intersection (A ∩ B) contains items in both. A Venn diagram shows these relationships with overlapping circles.", example: { q: "A = {1, 2, 3} and B = {3, 4}. Find A ∩ B.", answer: "{3}", steps: ["The intersection contains elements in both sets.", "Only 3 appears in A and B, so A ∩ B = {3}."] }, practice: { q: "A = {a, b, c} and B = {c, d}. Find A ∪ B.", answer: "{a, b, c, d}", steps: ["The union includes every element in either set.", "List each element once: {a, b, c, d}."] } },
    { title: "Angles & parallel lines", unit: "Geometry", icon: "15", idea: "When a transversal crosses parallel lines, corresponding angles are equal and alternate angles are equal. Co-interior angles on the same side of the transversal add to 180°. Use these facts to find unknown angles.", example: { q: "One angle is 68°. What is its corresponding angle on the other parallel line?", answer: "68°", steps: ["Corresponding angles between parallel lines are equal.", "So the corresponding angle is 68°."] }, practice: { q: "A co-interior angle is 112°. Find the other co-interior angle.", answer: "68°", steps: ["Co-interior angles add to 180°.", "180° − 112° = 68°."] } },
    { title: "Triangles & polygons", unit: "Geometry", icon: "16", idea: "The interior angles of a triangle add to 180°. A quadrilateral's interior angles add to 360°. A polygon's exterior angles, one at each vertex, add to 360°.", example: { q: "A triangle has angles 50° and 60°. Find the third angle.", answer: "70°", steps: ["Triangle angles add to 180°.", "180° − 50° − 60° = 70°."] }, practice: { q: "A quadrilateral has angles 90°, 85° and 110°. Find the fourth angle.", answer: "75°", steps: ["Quadrilateral angles add to 360°.", "360° − 90° − 85° − 110° = 75°."] } },
    { title: "Geometrical constructions", unit: "Geometry", icon: "17", idea: "Use a ruler, compass and protractor for accurate constructions. A perpendicular bisector crosses a line segment at 90° and through its midpoint. An angle bisector divides an angle into two equal angles.", example: { q: "An angle of 80° is bisected. How large is each new angle?", answer: "40°", steps: ["An angle bisector divides an angle into two equal parts.", "80° ÷ 2 = 40°."] }, practice: { q: "A 10 cm line segment is bisected. How long is each half?", answer: "5 cm", steps: ["A bisector divides a segment into two equal parts.", "10 cm ÷ 2 = 5 cm."] } },
    { title: "Coordinates & transformations", unit: "Geometry", icon: "18", idea: "Coordinates are written (x, y): move x units horizontally, then y units vertically. A translation slides a shape; a reflection flips it over a mirror line; a rotation turns it around a fixed point.", example: { q: "Start at (2, 1). Translate 3 units right and 2 units up. What is the new point?", answer: "(5, 3)", steps: ["Moving right adds 3 to x: 2 + 3 = 5.", "Moving up adds 2 to y: 1 + 2 = 3.", "The new point is (5, 3)."] }, practice: { q: "Reflect the point (4, 2) in the y-axis.", answer: "(−4, 2)", steps: ["Reflection in the y-axis changes the sign of x.", "Keep y the same: (4, 2) → (−4, 2)."] } },
    { title: "Perimeter, area & circles", unit: "Measurement", icon: "19", idea: "Perimeter is the distance around a shape; area is the surface it covers. Circle circumference C = 2πr or πd, and circle area A = πr², where r is the radius and d is the diameter. Use π ≈ 22/7 or 3.142.", example: { q: "Find the circumference of a circle with radius 7 cm. Use π = 22/7.", answer: "44 cm", steps: ["C = 2πr.", "C = 2 × 22/7 × 7 = 44 cm."] }, practice: { q: "Find the area of a circle with radius 7 cm. Use π = 22/7.", answer: "154 cm²", steps: ["A = πr² = 22/7 × 7 × 7.", "A = 154 cm²."] } },
    { title: "Volume & capacity", unit: "Measurement", icon: "20", idea: "Volume measures the space inside a 3D object. A cuboid's volume is length × width × height; a cube's is side³. Volume is measured in cubic units. One cubic centimetre is one millilitre (1 cm³ = 1 mL).", example: { q: "Find the volume of a cuboid 5 cm × 3 cm × 4 cm.", answer: "60 cm³", steps: ["Volume = length × width × height.", "5 × 3 × 4 = 60 cm³."] }, practice: { q: "A cube has side 4 cm. Find its volume.", answer: "64 cm³", steps: ["Volume of a cube = side × side × side.", "4 × 4 × 4 = 64 cm³."] } },
    { title: "Time, distance & speed", unit: "Measurement", icon: "21", idea: "Speed = distance ÷ time. Distance = speed × time, and time = distance ÷ speed. Make sure the distance and time units match before calculating; for example, use kilometres with hours for km/h.", example: { q: "A cyclist travels 36 km in 2 hours. Find the average speed.", answer: "18 km/h", steps: ["Speed = distance ÷ time.", "36 ÷ 2 = 18 km/h."] }, practice: { q: "A bus travels at 60 km/h for 3 hours. How far does it travel?", answer: "180 km", steps: ["Distance = speed × time.", "60 × 3 = 180 km."] } },
    { title: "Data, tables & graphs", unit: "Statistics", icon: "22", idea: "Organise observations in frequency tables. A bar chart compares categories; a line graph shows change over time. Label axes, choose an even scale and plot each value carefully.", example: { q: "A bar chart has frequencies 7, 4 and 9. What is the total frequency?", answer: "20", steps: ["Add the frequencies: 7 + 4 + 9.", "The total frequency is 20."] }, practice: { q: "A class has 12 boys and 15 girls. How many pupils are there?", answer: "27 pupils", steps: ["Add the two groups: 12 + 15 = 27.", "There are 27 pupils altogether."] } },
    { title: "Averages & range", unit: "Statistics", icon: "23", idea: "The mean is the sum divided by the number of values. The median is the middle value in an ordered list. The mode is the most frequent value, and the range is the difference between the largest and smallest values.", example: { q: "Find the median of 3, 9, 4, 7, 2.", answer: "4", steps: ["Order the values: 2, 3, 4, 7, 9.", "The middle (third) value is 4."] }, practice: { q: "Find the mode and range of 2, 5, 5, 8.", answer: "Mode = 5; range = 6", steps: ["5 occurs most often, so the mode is 5.", "Range = 8 − 2 = 6."] } },
    { title: "Probability", unit: "Statistics", icon: "24", idea: "Probability measures how likely an event is. For equally likely outcomes, probability = favourable outcomes ÷ total possible outcomes. It ranges from 0 (impossible) to 1 (certain).", example: { q: "A fair coin is tossed. What is the probability of getting heads?", answer: "1/2", steps: ["There is 1 favourable outcome: heads.", "There are 2 equally likely outcomes: heads or tails. P(heads) = 1/2."] }, practice: { q: "A fair six-sided die is rolled. What is the probability of rolling a 5?", answer: "1/6", steps: ["There is 1 favourable outcome and 6 equally likely outcomes.", "The probability is 1/6."] } }
  ]
};

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return Math.abs(a);
}

function fraction(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

function primeFactorization(value) {
  const factors = [];
  for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
    let exponent = 0;
    while (value % divisor === 0) {
      value /= divisor;
      exponent += 1;
    }
    if (exponent) factors.push(`${divisor}${exponent > 1 ? `^${exponent}` : ""}`);
  }
  if (value > 1) factors.push(String(value));
  return factors.join(" × ");
}

function decimal(value) {
  return Number(value.toFixed(2)).toString();
}

function generatedQuestion(topic, index) {
  const n = index + 1;
  const title = topic.title.toLowerCase();
  const make = (q, answer, steps) => ({ q, answer: String(answer), steps });

  if (title.includes("whole numbers")) {
    const digit = (n % 9) + 1;
    const number = 40000 + digit * 1000 + n * 10 + 7;
    return make(`What is the value of ${digit} in ${number.toLocaleString("en-US")}?`, (digit * 1000).toLocaleString("en-US"), [`The ${digit} is in the thousands place.`, `${digit} × 1,000 = ${(digit * 1000).toLocaleString("en-US")}.`]);
  }
  if (title.includes("number bases")) {
    const value = n + 12;
    return make(`Convert ${value}₁₀ to base two.`, `${value.toString(2)}₂`, [`Divide ${value} repeatedly by 2 and record each remainder.`, `Read the remainders upwards: ${value.toString(2)}₂.`]);
  }
  if (title.includes("factors, multiples")) {
    if (title.includes("prime factors")) {
      const value = (n + 1) * 30;
      const answer = primeFactorization(value);
      return make(`Express ${value} as a product of prime factors.`, answer, [`Divide ${value} into prime factors: ${value} = ${answer}.`, `Every factor shown is prime.`]);
    }
    const a = 2 * (n + 3);
    const b = 3 * (n + 3);
    return make(`Find the HCF and LCM of ${a} and ${b}.`, `HCF = ${n + 2}; LCM = ${6 * (n + 2)}`, [`${a} = 2 × ${n + 2} and ${b} = 3 × ${n + 2}.`, `HCF = ${n + 2}; LCM = 2 × 3 × ${n + 2} = ${6 * (n + 2)}.`]);
  }
  if (title.includes("basic operations")) {
    const a = n + 14;
    const b = (n % 8) + 2;
    const c = (n % 5) + 2;
    return make(`Work out ${a} + ${b} × ${c}.`, a + b * c, [`Multiply first: ${b} × ${c} = ${b * c}.`, `${a} + ${b * c} = ${a + b * c}.`]);
  }
  if (title.includes("fractions") && !title.includes("decimals")) {
    if (title.includes("mixed numbers") && n % 2 === 0) {
      const a = (n % 5) + 1;
      const b = (n % 4) + 2;
      const c = (n % 3) + 1;
      const d = (n % 5) + 2;
      return make(`Work out ${a}/${b} ÷ ${c}/${d}.`, fraction(a * d, b * c), [`Multiply by the reciprocal: ${a}/${b} × ${d}/${c}.`, `Simplify ${a * d}/${b * c} to ${fraction(a * d, b * c)}.`]);
    }
    if (title.includes("mixed numbers")) {
      const a = (n % 6) + 1;
      const b = (n % 5) + 2;
      const c = (n % (b - 1)) + 1;
      const d = (n % 4) + 2;
      return make(`Work out ${a}/${b} × ${c}/${d}.`, fraction(a * c, b * d), [`Multiply the numerators and denominators: (${a} × ${c})/(${b} × ${d}) = ${a * c}/${b * d}.`, `Simplify ${a * c}/${b * d} to ${fraction(a * c, b * d)}.`]);
    }
    const a = (n % 5) + 1;
    const b = (n % 4) + 2;
    const c = (n % 5) + 1;
    const d = (n % 6) + 2;
    const numerator = a * d + c * b;
    const denominator = b * d;
    return make(`Work out ${a}/${b} + ${c}/${d}.`, fraction(numerator, denominator), [`Use denominator ${denominator}: ${a}/${b} = ${a * d}/${denominator} and ${c}/${d} = ${c * b}/${denominator}.`, `Add and simplify: ${numerator}/${denominator} = ${fraction(numerator, denominator)}.`]);
  }
  if (title.includes("decimals")) {
    if (title.includes("recurring")) {
      const numerator = n;
      return make(`Write 0.${String(numerator).padStart(2, "0")} as a fraction in its simplest form.`, fraction(numerator, 100), [`Write the decimal as ${numerator}/100.`, `Divide numerator and denominator by their HCF: ${fraction(numerator, 100)}.`]);
    }
    const a = n * 0.13 + 1;
    const b = n * 0.07 + 0.25;
    const isSubtraction = n % 2 === 0;
    const result = decimal(isSubtraction ? a - b : a + b);
    const operation = isSubtraction ? "−" : "+";
    return make(`Work out ${decimal(a)} ${operation} ${decimal(b)}.`, result, [`Line up the decimal points and ${isSubtraction ? "subtract" : "add"}.`, `${decimal(a)} ${operation} ${decimal(b)} = ${result}.`]);
  }
  if (title.includes("fractions, decimals")) {
    const numerator = n;
    return make(`Write ${numerator}/100 as a fraction in its simplest form and as a percentage.`, `${fraction(numerator, 100)} and ${numerator}%`, [`Simplify ${numerator}/100 to ${fraction(numerator, 100)}.`, `${numerator}/100 × 100% = ${numerator}%.`]);
  }
  if (title.includes("significant figures")) {
    const value = n * 1287 + 436;
    const place = 10 ** (Math.floor(Math.log10(value)) - 1);
    const rounded = Math.round(value / place) * place;
    return make(`Round ${value.toLocaleString("en-US")} to 2 significant figures.`, rounded.toLocaleString("en-US"), [`The first two significant digits are in the ${place.toLocaleString("en-US")}s place; check the next digit.`, `Rounded to 2 significant figures, ${value.toLocaleString("en-US")} is ${rounded.toLocaleString("en-US")}.`]);
  }
  if (title.includes("approximation")) {
    const value = 1287 * n + 436;
    const rounded = Math.round(value / 100) * 100;
    return make(`Round ${value.toLocaleString("en-US")} to the nearest hundred.`, rounded.toLocaleString("en-US"), [`Check the tens digit of ${value.toLocaleString("en-US")}.`, `Rounded to the nearest hundred, ${value.toLocaleString("en-US")} is ${rounded.toLocaleString("en-US")}.`]);
  }
  if (title.includes("directed numbers")) {
    const a = n + 5;
    const b = n % 4 + 2;
    return make(`Work out −${a} + ${a + b}.`, b, [`Starting at −${a}, move ${a + b} places to the right.`, `−${a} + ${a + b} = ${b}.`]);
  }
  if (title === "ratio") {
    if (n % 2 === 0) {
      const parts = n % 7 + 2;
      const total = parts * (n + 3);
      return make(`Share ${total} counters in the ratio ${parts}:${n + 3 - parts}.`, `${parts * (n + 3)} counters and ${(n + 3 - parts) * (n + 3)} counters`, [`There are ${n + 3} parts altogether, so each part is ${total} ÷ ${n + 3} = ${n + 3} counters.`, `The shares are ${parts} × ${n + 3} = ${parts * (n + 3)} and ${n + 3 - parts} × ${n + 3} = ${(n + 3 - parts) * (n + 3)} counters.`]);
    }
    const a = 2 * n;
    const b = 3 * n;
    return make(`Simplify the ratio ${a}:${b}.`, "2:3", [`The HCF of ${a} and ${b} is ${n}.`, `Divide both parts by ${n}: ${a}:${b} = 2:3.`]);
  }
  if (title.includes("ratio, rate")) {
    const count = n + 2;
    const unitCost = n * 25;
    const wanted = (n % 7) + 2;
    return make(`${count} notebooks cost ₦${(count * unitCost).toLocaleString("en-US")}. At the same rate, how much do ${wanted} notebooks cost?`, `₦${(wanted * unitCost).toLocaleString("en-US")}`, [`One notebook costs ₦${(count * unitCost).toLocaleString("en-US")} ÷ ${count} = ₦${unitCost}.`, `${wanted} cost ${wanted} × ₦${unitCost} = ₦${(wanted * unitCost).toLocaleString("en-US")}.`]);
  }
  if (title.includes("profit")) {
    const cost = n * 100 + 50;
    const change = cost * 10 / 100;
    const isLoss = n % 2 === 0;
    const sellingPrice = isLoss ? cost - change : cost + change;
    return make(`An item costs ₦${cost.toLocaleString("en-US")} and sells for ₦${sellingPrice.toLocaleString("en-US")}. Find the percentage ${isLoss ? "loss" : "profit"}.`, "10%", [`${isLoss ? "Loss" : "Profit"} = ₦${change.toLocaleString("en-US")}.`, `Percentage ${isLoss ? "loss" : "profit"} = (${change} ÷ ${cost}) × 100% = 10%.`]);
  }
  if (title.includes("percentage")) {
    const percent = (n % 19 + 1) * 5;
    const amount = n * 20 + 100;
    return make(`Find ${percent}% of ${amount}.`, amount * percent / 100, [`${percent}% = ${percent}/100.`, `${amount} × ${percent}/100 = ${amount * percent / 100}.`]);
  }
  if (title.includes("algebraic expressions") && !title.includes("substitution")) {
    const a = n + 3;
    const b = n + 2;
    const c = n % 9 + 1;
    return make(`Simplify ${a}x + ${b}x − ${c}.`, `${a + b}x − ${c}`, [`Collect like terms: ${a}x + ${b}x = ${a + b}x.`, `The simplified expression is ${a + b}x − ${c}.`]);
  }
  if (title === "simple equations" || title.includes("linear equations")) {
    const answer = n + 3;
    const coefficient = n % 5 + 2;
    const constant = n % 7 + 1;
    const right = coefficient * answer + constant;
    return make(`Solve ${coefficient}x + ${constant} = ${right}.`, `x = ${answer}`, [`Subtract ${constant} from both sides: ${coefficient}x = ${right - constant}.`, `Divide by ${coefficient}: x = ${answer}.`]);
  }
  if (title.includes("lines, angles")) {
    if (n % 2 === 0) {
      const a = n + 60;
      const b = n + 70;
      return make(`Two angles around a point are ${a}° and ${b}°. Find the remaining angle.`, `${360 - a - b}°`, [`Angles around a point add to 360°.`, `360° − ${a}° − ${b}° = ${360 - a - b}°.`]);
    }
    const angle = n + 40;
    return make(`Two angles on a straight line are ${angle}° and x°. Find x.`, `${180 - angle}°`, [`Angles on a straight line add to 180°.`, `x = 180° − ${angle}° = ${180 - angle}°.`]);
  }
  if (title.includes("angles & parallel")) {
    const angle = n + 40;
    if (n % 2 === 0) return make(`A transversal crosses two parallel lines. One co-interior angle is ${angle}°. Find the other.`, `${180 - angle}°`, [`Co-interior angles between parallel lines add to 180°.`, `180° − ${angle}° = ${180 - angle}°.`]);
    return make(`A transversal crosses two parallel lines. One corresponding angle is ${angle}°. Find the other.`, `${angle}°`, [`Corresponding angles between parallel lines are equal.`, `The other corresponding angle is ${angle}°.`]);
  }
  if (title.includes("perimeter") && title.includes("circles")) {
    const radius = 7 * n;
    if (n % 2 === 0) return make(`Find the area of a circle with radius ${radius} cm. Use π = 22/7.`, `${22 * radius * radius / 7} cm²`, [`Area = πr².`, `22/7 × ${radius} × ${radius} = ${22 * radius * radius / 7} cm².`]);
    return make(`Find the circumference of a circle with radius ${radius} cm. Use π = 22/7.`, `${4 * radius} cm`, [`Circumference = 2πr.`, `2 × 22/7 × ${radius} = ${4 * radius} cm.`]);
  }
  if (title.includes("perimeter") || title.includes("area")) {
    const length = n + 3;
    const width = n + 1;
    if (n % 2 === 0) return make(`Find the perimeter of a rectangle ${length} cm long and ${width} cm wide.`, `${2 * (length + width)} cm`, [`Perimeter = 2 × (length + width).`, `2 × (${length} + ${width}) = ${2 * (length + width)} cm.`]);
    return make(`Find the area of a rectangle ${length} cm long and ${width} cm wide.`, `${length * width} cm²`, [`Area = length × width.`, `${length} × ${width} = ${length * width} cm².`]);
  }
  if (title.includes("length, mass")) {
    const centimetres = n * 25;
    return make(`Convert ${centimetres} cm to metres.`, `${decimal(centimetres / 100)} m`, [`100 cm = 1 m.`, `${centimetres} ÷ 100 = ${decimal(centimetres / 100)} m.`]);
  }
  if (title.includes("collecting") || title.includes("data, tables")) {
    const a = n + 3;
    const b = n + 5;
    const c = n + 7;
    return make(`A survey records ${a}, ${b} and ${c} votes for three choices. How many votes were cast?`, a + b + c, [`Add the frequencies: ${a} + ${b} + ${c}.`, `The total is ${a + b + c} votes.`]);
  }
  if (title.includes("mean, median") || title.includes("averages")) {
    const values = [3 * n, 3 * n + 2, 3 * n + 4, 3 * n + 6];
    return make(`Find the mean and range of ${values.join(", ")}.`, `Mean = ${3 * n + 3}; range = 6`, [`Mean = (${values.join(" + ")}) ÷ 4 = ${4 * (3 * n + 3)} ÷ 4 = ${3 * n + 3}.`, `Range = ${3 * n + 6} − ${3 * n} = 6.`]);
  }
  if (title.includes("large numbers")) {
    const coefficient = n % 7 + 1;
    const exponent = Math.floor((n - 1) / 7) + 2;
    const value = coefficient * 10 ** exponent;
    return make(`Write ${value.toLocaleString("en-US")} in standard form.`, `${coefficient} × 10${["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"][exponent]}`, [`Move the decimal point ${exponent} place${exponent === 1 ? "" : "s"} left to leave one non-zero digit before it.`, `${value.toLocaleString("en-US")} = ${coefficient} × 10${["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"][exponent]}.`]);
  }
  if (title.includes("discount")) {
    const cost = n * 100 + 50;
    const rate = 10;
    const amount = cost * rate / 100;
    if (n % 2 === 0) {
      const rate = 5 * (n % 5 + 1);
      const interest = cost * rate * (n % 4 + 1) / 100;
      return make(`Find the simple interest on ₦${cost.toLocaleString("en-US")} at ${rate}% per year for ${n % 4 + 1} years.`, `₦${interest.toLocaleString("en-US")}`, [`I = PRT/100.`, `I = (${cost} × ${rate} × ${n % 4 + 1})/100 = ₦${interest.toLocaleString("en-US")}.`]);
    }
    return make(`A ₦${cost.toLocaleString("en-US")} item has a ${rate}% discount. What is the sale price?`, `₦${(cost - amount).toLocaleString("en-US")}`, [`Discount = ${rate}% of ₦${cost.toLocaleString("en-US")} = ₦${amount.toLocaleString("en-US")}.`, `Sale price = ₦${cost.toLocaleString("en-US")} − ₦${amount.toLocaleString("en-US")} = ₦${(cost - amount).toLocaleString("en-US")}.`]);
  }
  if (title.includes("directed numbers &")) {
    const a = n + 2;
    const b = n + 4;
    if (n % 2 === 0) return make(`Work out (−${a * b}) ÷ ${b}.`, `−${a}`, [`The signs are different, so the quotient is negative.`, `${a * b} ÷ ${b} = ${a}, giving −${a}.`]);
    return make(`Work out (−${a}) × (−${b}).`, a * b, [`The signs are the same, so the product is positive.`, `${a} × ${b} = ${a * b}.`]);
  }
  if (title.includes("substitution")) {
    const x = n + 1;
    const multiplier = n % 5 + 2;
    const constant = n % 7 + 1;
    return make(`Evaluate ${multiplier}x + ${constant} when x = ${x}.`, multiplier * x + constant, [`Substitute x = ${x}: ${multiplier}(${x}) + ${constant}.`, `${multiplier * x} + ${constant} = ${multiplier * x + constant}.`]);
  }
  if (title.includes("expansion")) {
    const a = n % 8 + 2;
    const b = n + 3;
    return make(`Expand ${a}(x + ${b}).`, `${a}x + ${a * b}`, [`Multiply each term in the bracket by ${a}.`, `${a} × x + ${a} × ${b} = ${a}x + ${a * b}.`]);
  }
  if (title.includes("sequences")) {
    const difference = n % 8 + 2;
    const start = n * 3;
    const terms = [start, start + difference, start + 2 * difference, start + 3 * difference];
    return make(`Write the next two terms: ${terms.join(", ")}, …`, `${start + 4 * difference}, ${start + 5 * difference}`, [`The common difference is ${difference}.`, `${terms[3]} + ${difference} = ${start + 4 * difference}; the next term is ${start + 5 * difference}.`]);
  }
  if (title.includes("sets")) {
    const a = n + 1;
    const b = n + 2;
    const common = n + 3;
    return make(`A = {${a}, ${common}} and B = {${common}, ${b}}. Find A ∩ B.`, `{${common}}`, [`The intersection contains elements in both sets.`, `The only shared element is ${common}, so A ∩ B = {${common}}.`]);
  }
  if (title.includes("triangles")) {
    const a = n + 40;
    const b = n + 50;
    if (n % 2 === 0) return make(`A quadrilateral has angles ${a}°, ${b}°, 90° and x°. Find x.`, `${360 - a - b - 90}°`, [`Angles in a quadrilateral add to 360°.`, `360° − ${a}° − ${b}° − 90° = ${360 - a - b - 90}°.`]);
    return make(`A triangle has angles ${a}° and ${b}°. Find the third angle.`, `${180 - a - b}°`, [`Angles in a triangle add to 180°.`, `180° − ${a}° − ${b}° = ${180 - a - b}°.`]);
  }
  if (title.includes("constructions")) {
    const angle = 2 * (n + 20);
    return make(`An angle of ${angle}° is bisected. Find each new angle.`, `${angle / 2}°`, [`An angle bisector divides an angle into two equal parts.`, `${angle}° ÷ 2 = ${angle / 2}°.`]);
  }
  if (title.includes("coordinates")) {
    const x = n + 2;
    const y = n + 4;
    if (n % 2 === 0) return make(`Translate the point (${x}, ${y}) 3 units right and 2 units up.`, `(${x + 3}, ${y + 2})`, [`Add 3 to the x-coordinate and 2 to the y-coordinate.`, `(${x}, ${y}) becomes (${x + 3}, ${y + 2}).`]);
    return make(`Reflect the point (${x}, ${y}) in the y-axis.`, `(−${x}, ${y})`, [`Reflection in the y-axis changes the sign of x.`, `Keep y the same: (${x}, ${y}) becomes (−${x}, ${y}).`]);
  }
  if (title.includes("volume")) {
    const side = n + 1;
    if (n % 2 === 0) {
      const length = n + 2;
      const width = n + 1;
      const height = n + 3;
      return make(`Find the volume of a cuboid ${length} cm × ${width} cm × ${height} cm.`, `${length * width * height} cm³`, [`Volume = length × width × height.`, `${length} × ${width} × ${height} = ${length * width * height} cm³.`]);
    }
    return make(`Find the volume of a cube with side ${side} cm.`, `${side ** 3} cm³`, [`Volume of a cube = side × side × side.`, `${side} × ${side} × ${side} = ${side ** 3} cm³.`]);
  }
  if (title.includes("time, distance")) {
    const speed = n + 20;
    const time = n % 5 + 2;
    if (n % 2 === 0) return make(`A cyclist travels ${speed * time} km in ${time} hours. Find the average speed.`, `${speed} km/h`, [`Speed = distance ÷ time.`, `${speed * time} ÷ ${time} = ${speed} km/h.`]);
    return make(`A bus travels at ${speed} km/h for ${time} hours. How far does it travel?`, `${speed * time} km`, [`Distance = speed × time.`, `${speed} × ${time} = ${speed * time} km.`]);
  }
  if (title.includes("probability")) {
    const outcomes = n + 2;
    return make(`A fair spinner has ${outcomes} equal sections, and one section is red. What is the probability of landing on red?`, `1/${outcomes}`, [`Probability = favourable outcomes ÷ total outcomes.`, `There is 1 red section out of ${outcomes}, so the probability is 1/${outcomes}.`]);
  }
  return make(topic.practice.q, topic.practice.answer, topic.practice.steps);
}

function getQuestionBank(topic) {
  return Array.from({ length: 50 }, (_, index) =>
    index === 0 ? topic.practice : generatedQuestion(topic, index)
  );
}

function getQuestionOptions(question, questionIndex) {
  const answer = question.answer.trim();
  const distractors = new Set();
  const add = value => {
    const option = String(value).trim();
    if (option && option !== answer) distractors.add(option);
  };

  const fractionMatch = answer.match(/^(-?\d+)\/(\d+)$/);
  if (fractionMatch) {
    const numerator = Number(fractionMatch[1]);
    const denominator = Number(fractionMatch[2]);
    add(`${numerator + 1}/${denominator}`);
    add(`${numerator}/${denominator + 1}`);
    add(`${Math.max(1, numerator - 1)}/${denominator}`);
  } else {
    const ratioMatch = answer.match(/^(\d+):(\d+)$/);
    const coordinateMatch = answer.match(/^\((-?\d+),\s*(-?\d+)\)$/);
    const equationMatch = answer.match(/^([a-z]\s*=\s*)(-?\d+(?:\.\d+)?)(.*)$/i);
    const numberMatch = answer.match(/^(\D*?)(-?\d[\d,]*(?:\.\d+)?)(.*)$/);

    if (ratioMatch) {
      const first = Number(ratioMatch[1]);
      const second = Number(ratioMatch[2]);
      add(`${first + 1}:${second}`);
      add(`${first}:${second + 1}`);
      add(`${Math.max(1, first - 1)}:${second}`);
    } else if (coordinateMatch) {
      const x = Number(coordinateMatch[1]);
      const y = Number(coordinateMatch[2]);
      add(`(${x + 1}, ${y})`);
      add(`(${x}, ${y + 1})`);
      add(`(${x - 1}, ${y})`);
    } else if (equationMatch) {
      const value = Number(equationMatch[2]);
      const offset = Math.max(1, Math.round(Math.abs(value) * 0.1));
      add(`${equationMatch[1]}${value + offset}${equationMatch[3]}`);
      add(`${equationMatch[1]}${value - offset}${equationMatch[3]}`);
      add(`${equationMatch[1]}${value + 1}${equationMatch[3]}`);
    } else if (numberMatch) {
      const prefix = numberMatch[1];
      const rawValue = numberMatch[2];
      const value = Number(rawValue.replaceAll(",", ""));
      const suffix = numberMatch[3];
      const offset = Math.max(1, Math.round(Math.abs(value) * 0.1));
      const format = candidate => {
        const formatted = Number.isInteger(value) ? Math.round(candidate).toLocaleString("en-US") : Number(candidate.toFixed(2)).toString();
        return `${prefix}${formatted}${suffix}`;
      };
      add(format(value + offset));
      add(format(value - offset));
      add(format(value + 1));
      add(format(value - 1));
    }
  }

  if (distractors.size < 3) {
    const digits = answer.match(/\d+/g) || [];
    for (let offset = 1; distractors.size < 3 && offset < 10; offset += 1) {
      if (digits.length) {
        const last = digits[digits.length - 1];
        const alternate = String(Number(last) + offset);
        const position = answer.lastIndexOf(last);
        add(`${answer.slice(0, position)}${alternate}${answer.slice(position + last.length)}`);
      } else {
        add(`${answer} (${offset})`);
      }
    }
  }

  const choices = [answer, ...distractors].slice(0, 4);
  while (choices.length < 4) choices.push(`${answer} (${choices.length})`);
  const rotation = (questionIndex * 7 + answer.length) % choices.length;
  return choices.slice(rotation).concat(choices.slice(0, rotation));
}

const classButtons = document.querySelectorAll(".class-button");
const topicNav = document.querySelector("#topic-nav");
const topicList = document.querySelector("#topic-list");
const lessonContent = document.querySelector("#lesson-content");
const searchInput = document.querySelector("#topic-search");
const completed = new Set(JSON.parse(localStorage.getItem("maths-made-easy-completed") || "[]"));
let currentClass = "JSS1";
let currentTopicIndex = 0;
let currentQuestionIndex = 0;
let searchTerm = "";

function getTopicKey(className, index) {
  return `${className}-${index}`;
}

function getFilteredTopics() {
  return curriculum[currentClass]
    .map((topic, index) => ({ ...topic, index }))
    .filter(topic => `${topic.title} ${topic.unit} ${topic.idea}`.toLowerCase().includes(searchTerm));
}

function renderTopics() {
  const topics = curriculum[currentClass];
  const filteredTopics = getFilteredTopics();
  document.querySelector("#breadcrumb-class").textContent = currentClass;
  document.querySelector("#course-meta").textContent = `${currentClass} · Nigerian junior secondary topics`;
  document.querySelector("#panel-title").textContent = `${currentClass} lessons`;
  document.querySelector("#topic-count").textContent = `${topics.length}`;
  document.querySelector("#panel-count").textContent = `${filteredTopics.length} topics`;

  topicNav.innerHTML = "";
  const units = [...new Set(topics.map(topic => topic.unit))];
  units.forEach(unit => {
    const group = document.createElement("div");
    group.className = "nav-group";
    const heading = document.createElement("p");
    heading.className = "nav-group-title";
    heading.textContent = unit;
    group.append(heading);
    topics.forEach((topic, index) => {
      if (topic.unit !== unit) return;
      const link = document.createElement("button");
      link.className = "nav-link";
      link.classList.toggle("selected", index === currentTopicIndex);
      link.textContent = topic.title;
      link.addEventListener("click", () => selectTopic(index));
      group.append(link);
    });
    topicNav.append(group);
  });

  topicList.innerHTML = "";
  filteredTopics.forEach(topic => {
    const button = document.createElement("button");
    button.className = "topic-card";
    button.classList.toggle("selected", topic.index === currentTopicIndex);
    const isComplete = completed.has(getTopicKey(currentClass, topic.index));
    button.innerHTML = `<span class="topic-number">${topic.icon}</span><span class="topic-card-copy"><span class="topic-card-title"></span><span class="topic-card-unit"></span></span><span class="topic-check" aria-label="${isComplete ? "Completed" : "Not completed"}">${isComplete ? "✓" : "›"}</span>`;
    button.querySelector(".topic-card-title").textContent = topic.title;
    button.querySelector(".topic-card-unit").textContent = topic.unit;
    button.addEventListener("click", () => selectTopic(topic.index));
    topicList.append(button);
  });
  document.querySelector("#empty-state").hidden = filteredTopics.length !== 0;
  renderLesson();
  renderProgress();
}

function renderLesson() {
  const topic = curriculum[currentClass][currentTopicIndex];
  if (!topic) return;
  const questionBank = getQuestionBank(topic);
  const question = questionBank[currentQuestionIndex];
  const questionOptions = getQuestionOptions(question, currentQuestionIndex);
  const key = getTopicKey(currentClass, currentTopicIndex);
  const done = completed.has(key);
  lessonContent.innerHTML = `
    <div class="lesson-kicker"><span class="lesson-kicker-dot"></span>${topic.unit}</div>
    <div class="lesson-title-row"><div><p class="lesson-number">LESSON ${String(currentTopicIndex + 1).padStart(2, "0")} <span>·</span> ${currentClass}</p><h3>${topic.title}</h3></div><span class="lesson-symbol" aria-hidden="true">${topic.icon}</span></div>
    <div class="lesson-divider"></div>
    <section class="lesson-block"><h4><span class="block-icon idea-icon">✳</span>The idea</h4><p class="idea-copy"></p></section>
    <section class="example-box"><div class="example-heading"><span class="example-icon">✦</span><div><span class="small-label">LET'S WORK IT OUT</span><h4>Worked example</h4></div></div><p class="question-text"></p><ol class="steps-list"></ol><div class="answer-line"><span>Answer</span><strong></strong></div></section>
    <section class="practice-box"><div class="practice-heading"><span class="practice-icon">✎</span><div><span class="small-label">YOUR TURN · 50 QUESTIONS</span><h4>Practice question <span class="question-count"></span></h4></div></div><p class="practice-question"></p><div class="answer-options" role="group" aria-label="Choose an answer"></div><p class="choice-feedback" role="status" aria-live="polite"></p><div class="question-navigation"><button class="question-prev" type="button" aria-label="Previous question">← Previous</button><span class="question-position"></span><button class="question-next" type="button" aria-label="Next question">Next →</button></div><button class="reveal-button" type="button" aria-expanded="false"><span>Show workings &amp; answer</span><span class="reveal-chevron">⌄</span></button><div class="practice-answer" hidden><div class="workings-heading">Workings</div><ol class="practice-steps"></ol><div class="answer-line"><span>Answer</span><strong></strong></div></div></section>
    <button class="complete-button ${done ? "is-complete" : ""}" type="button"><span class="complete-check">${done ? "✓" : "○"}</span>${done ? "Lesson completed" : "Mark lesson as complete"}</button>`;

  lessonContent.querySelector(".idea-copy").textContent = topic.idea;
  lessonContent.querySelector(".question-text").textContent = topic.example.q;
  lessonContent.querySelector(".example-box .answer-line strong").textContent = topic.example.answer;
  topic.example.steps.forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    lessonContent.querySelector(".steps-list").append(item);
  });
  lessonContent.querySelector(".question-count").textContent = `(${questionBank.length})`;
  lessonContent.querySelector(".practice-question").textContent = question.q;
  const practiceAnswer = lessonContent.querySelector(".practice-answer");
  practiceAnswer.querySelector(".answer-line strong").textContent = question.answer;
  const optionList = lessonContent.querySelector(".answer-options");
  const feedback = lessonContent.querySelector(".choice-feedback");
  questionOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option;
    button.append(label, text);
    button.addEventListener("click", () => {
      optionList.querySelectorAll(".answer-option").forEach(choice => {
        choice.classList.remove("is-correct", "is-incorrect");
        choice.setAttribute("aria-pressed", "false");
      });
      const isCorrect = option === question.answer;
      button.classList.add(isCorrect ? "is-correct" : "is-incorrect");
      button.setAttribute("aria-pressed", "true");
      feedback.textContent = isCorrect ? "Correct! Now review the workings below." : "Not quite. Try again, or reveal the workings.";
      feedback.classList.toggle("is-correct", isCorrect);
      feedback.classList.toggle("is-incorrect", !isCorrect);
    });
    optionList.append(button);
  });
  question.steps.forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    practiceAnswer.querySelector(".practice-steps").append(item);
  });
  const questionPosition = lessonContent.querySelector(".question-position");
  questionPosition.textContent = `${currentQuestionIndex + 1} / ${questionBank.length}`;
  const previousButton = lessonContent.querySelector(".question-prev");
  const nextButton = lessonContent.querySelector(".question-next");
  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questionBank.length - 1;
  previousButton.addEventListener("click", () => {
    currentQuestionIndex -= 1;
    renderLesson();
  });
  nextButton.addEventListener("click", () => {
    currentQuestionIndex += 1;
    renderLesson();
  });
  const revealButton = lessonContent.querySelector(".reveal-button");
  revealButton.addEventListener("click", () => {
    const expanded = revealButton.getAttribute("aria-expanded") === "true";
    revealButton.setAttribute("aria-expanded", String(!expanded));
    practiceAnswer.hidden = expanded;
    revealButton.querySelector("span").textContent = expanded ? "Show workings & answer" : "Hide workings & answer";
  });
  lessonContent.querySelector(".complete-button").addEventListener("click", () => {
    if (completed.has(key)) completed.delete(key);
    else completed.add(key);
    localStorage.setItem("maths-made-easy-completed", JSON.stringify([...completed]));
    renderTopics();
  });
}

function renderProgress() {
  const topics = curriculum[currentClass];
  const count = topics.filter((_, index) => completed.has(getTopicKey(currentClass, index))).length;
  const percent = topics.length ? Math.round((count / topics.length) * 100) : 0;
  document.querySelector("#progress-count").textContent = `${count} / ${topics.length}`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(percent));
}

function selectTopic(index) {
  currentTopicIndex = index;
  currentQuestionIndex = 0;
  renderTopics();
  document.querySelector("#lesson-heading").scrollIntoView({ behavior: "smooth", block: "start" });
}

classButtons.forEach(button => button.addEventListener("click", () => {
  currentClass = button.dataset.class;
  currentTopicIndex = 0;
  currentQuestionIndex = 0;
  classButtons.forEach(item => {
    const isActive = item === button;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  renderTopics();
}));

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderTopics();
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchTerm = "";
    renderTopics();
    searchInput.blur();
  }
});

renderTopics();
