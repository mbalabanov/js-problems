# Plain English Solution

Start with the greatest product of 0.

Go through each digit and its three neighbors create the product and compare it with the currently greatest if the new product is greater then remember it as the greatest product.

Repeat until all digit in the chain are done (i.e. the fourth last digit is reached)

---

Actually: Store all calculated products in an array, when finished, sort from greatest to smallest, only return an array of the top 13.