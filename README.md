# colorBrightness
A program that determines lightness of a color between 0 (black) and 100 (white) (the L in HSL)

## usage
getLightness(color,simple):

- color - A string supporting rgb and hex values, or array of color values.
  
- simple - bool, converts lightness to a value between 0 and 10.

- returns array:

  [0][0] - returns total lightness
  
  [0][1] array of seperate lightness values
  
  [1] - returns color in array.
  
## Example

```
  //returns lightness[0][0] = 20, lightness[0][1] = [10,10,10], lightness[1] = [50,50,50]
  let lightness = getLightness([50,50,50])
  let lightness = getLightness(rgb(50,50,50))
  let lightness = getLightness(#323232)
  
  //returns lightness[0][0] = 3, lightness[0][1] = [1.5,1.5,1.5], lightness[1] = [75,75,75]
  let lightness = getLightness([75,75,75],true)
```
    

