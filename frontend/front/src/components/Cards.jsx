import React from 'react';
import Card from "./Card"
const courses = [
  {
    id: 1,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhAPEBAVFRUQFRAVFhYXEBUVGRYWFRcYGBYVFRUYHykgGBslGxUVITEhJSkrLi4uFyAzODMvOSotLisBCgoKDg0OGhAQGy0lHyIyLS8tLSsrLS0tLS0tLS0tLSstLS03LS0tNS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwUHBAj/xABLEAACAQMCAwUDBwcICAcAAAABAgMABBESIQUTMQYiQVFhB3GBFCMyQmKRoRckM1KC0dIVFkNUcpKx01Vkc5OUo7LwNGODosHC4f/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAQMDAQcDBQAAAAAAAAABAhEDBBIhEzFBURQiUmGx0fAycZEFIzNC4f/aAAwDAQACEQMRAD8A4xQKKBWsoJUhTpCgQzRSNMUAOsgIrFQaYmrM2rHSsi5PiKx23jWRvdUkVvvQMpPl8Klgfq/caxuPQj1qQI8GagQsgeJFRJ679cfGn131CojIydv/AINDJIY+HSp4+yfhUQc/V9aZ8Oo86BMgtM0jRTGZEiLlURSzNsFUEknyAG5NbC54Bdwo0ktncxoBku9rKigeZZlAFfQvYbsrBwa1SSRAbiQLzpAAzBm35aHwQHb1xk1tOH8YlLSPNpMWk6VRTlW1ud2bGRyzEOnUN5isWXX4sctsml+7NEdO2j5VUUEV1b22di4rUx8QtUCJM+iaNRhVkIJWRQNlBwwPhnHma5VWyElJWjPKLiyWakpqNMVMrZNTUxWMVMVIgzIKYqIqQpkGSFOkKdBEkKdIU6ZFjFOo080xDxRSzRmmIlTFQzTzTCidFRzToFRXKBRQKxHWJUhTpCgQGmKRpigAFT5dYxU9Zpid+DJGMdamSPWoR97rWYbdCKkit9zG3oc++smo/rg1F2I64NMqfFB99AiIBx9EVA438x+Fdm7D+zuCC0XiV/bieWUI8Vs7qiKr4xq5hCs5UlsNsOmMjNWqZ7SUrbz8ItDC2xdZrVgg1suy4VgdIVu70Ddc7VRLPFOjTHBJqz5vUeh6VMnxyfj++uhe0z2epw6WKW2fFtcsUBd9oXwW0M53KkBiDue6QfDNIMyIJEULIWOBKQwwo8VU43PmfdV8akrKZJp0YEs2JTV3BJnSz5VTjqdWOn769Fm0UMhZ2Z+UysnLA0uVOe8XwQuw8N8mvJLKzYLMWwABkk4A6AZ6Cs1lw+WY4ijZsdSNgPex2FS4EfV/FZkntRLG4KSCF1fOxVipDZHhg5rzIRytGsHaNe64IYlUUjHiK5H2Q7X3XCIhb3kaTWu+kGQa0JOSibHWPHSRgfrDpW8m9sXDkUtBw+cv1AcRIgb+0HYr7wtcXVaDJkyboVTVfX7m7Hnio8m69uvEY4+HCFxqa4lQINWCNGXMnqAQo/aA8a4Awj0pguHz3shdGN91x3vLbHnWy7VdprjiU5uLhhsNKIuyRr+qo/Ek7n7gNQozXYxx2xoxZJWz0yWLaikZEuF1Zj1Nt5kYyPDO21ecCvQiumHAZcdGGRj3GpK4KcvlAsWGlhq1b/VwPpZ2xt/jVtIps84qamvoLsT7LrW0jWS7jS4nbc61DRx+SpGdiRt3jk56YFWfifZKwuUKS2cJGMAiNUZf7Lrhl+Bqh50nRd7O2u58sipirP7QuyB4XcBFYtDMGaJzjOAe8jY+suV38Qw9QKwKvi01aMs4uLpkhTpCnUisWakDUMUUAZM0s1HNFMKJZp1GnQIKeaVFMCWaKjRQKjQ0CigVjOoSpCnSFAhtRQ1FABRRToAzW/jtWRh9mvMhPhUtTVNMrceTKwx4Y9aeF8VfHiPMeP4Vi1mmZm86Apn1Z20CNZ6wAUV7ZtuhUuo+7DVWeJWcZiuhGkIMbBcfJZUddbhVAdn0k79QN6qfs89oMUlt/JPE9QjRMRzr9WOPvBZPLTpGGAO2ARtk2eXjnCYlDy8aeaNCrLEJeYSQQQGVQSdx5DFcfU6WcpcRu/8Av3O7o9XDHjScmmndevb7P0Nh7b2ReEyq2ATJbKn9oSKTj9gP+NcBsOEzTDWoQIM5dzpX4Hx+Aq+9r+1f8rzqWjK2lvvEjNpZ5GG8ki+JC5AA2G+5zVO4zxqfnZ0cvlZEalM4B+sMjcnHX4eeepiVKjjZOWbSw7Hx7NK7N0OkDSD7+px9x93SrPDEqAKihQOgAwB8K1XZaaR4FeUsSSxDMckjJ393v/dXjaebiRuIbJ1RbeCW4fUWVpUjxqWPSp33GxIzmpkUartVfGeTloAREGOV1MfXVkDGMeG3r5V4Vd/5ncQEcUBeCJJLN70nUyfMpp1LMyx5Mg5i93cb9a8F/wBiXt4klnvrGMywLcJE1xIJWjZSVwnKwWOCMZxkdaN8fUHjkVgVlgmZGDoxVl6EHBFW+/8AZndwrIefZySRQm4aCO4YzcodXEbIMj4+lV7gXDRcuytIECrqJ8SB1xnYdetTjJPsQlFruZGe6u8nDyDOdl7oIA2B6DbG3r616ey0fL4hYiZSoF1bZDDGMSruc+ANWi6uRb/J4UwiOcazjSAozp8O83n/AI167y35y6Qy6cnOUDg+7PQjzobFXNnYuIS3eCkKKGZyA+RhY9LEtvnvbKBkHduhArxRDiuY1JttOMOx1M+fPC6VOxzsBkjoAdvF2d7YR6FiumKuoA5hBIfHi2Ojefh/hXv4122sbWIzPNqA6LGpdiT0G2wz5sQPWsThK6o1qcauyi+2wuLKyFwyGdp2bCDACiMhgud8ZMeSfE+6uOirL2+7RS8RnS4fAjKfMoGzoXO4b7eRv7gOgqtit2KDjGmYM01KVoYp0hTq0oCilSoAkKlioA0waBUTApEUA0ZpiFig0yaRoGKilRQM0dAooFYzpEqQp0hQIbUUjTFADFZxEKwL1r1rUolc3RBY8dDTAOcZqWfSnj7NSohZAqc42plD6U1TH1c1Oxtea2kADAdizHugIpY5+7y8aKHYSxqsax8s83U2onbYgaFVfHOc592KscnBeVGECpKcqNKxlXZScuHkwceHlgePmuylubieW6lUkr4kba222HooI+Iqx8WMiQv8mQa9goGBjJ3IB22FKXcmjQX10YXkhjdea5XBWMkxrglgWAJYnOQAM5Y+lePtTxNZOXGhDgKuXMYDFh10t4ZPUADcV7+xvD5EeeWZSDsmWbLZ2Zgfhp3P76O0cUEyNymUtAGxhwFBJ1MuejMQGOBvn8UNmki47IsHyUBdJDDVvq0sckZzjxI6dDW09m/F4rTiEMk7BIXWaKZj0COjdcfaCVVScdaA486k1aoim07Oz9pu39pPY8URJF5waa0tlGcvayclWddvokK5/Z9a1/anjcVzZwxwcSslVLCKKSJ4NUxkVDqVJNBK57oGCMHNcrIxudqCcbmq1hRPqv0O9cQ7XcOYzOLuGQS2nIEUNu5uXfGy85BnR17p23rnVn2YXnc7OEDBlRkyfUMG6Dyrx8B7PRXECyuzgszYKsvQHA2IONwa93E+06wuIIwGK9wu5wA2wB+1jfPSpQht7ClLcbD+QVLRM8juIRhVITGMYIOF38PurbgVXbTtIjEksuBpDjUF5Zzp1AnZ4yd+uRnxyMb2K5RmdVYEx4DD9XIyM/CpEGjNUJ4VdWRhlWBBHoakXHnQDQI57dWYhkmgdSzYHLYdc5BU48QRsfWvF02PhVt7ZWmUS4XZoyASPInY/Bv+qqxeKx0yswPODPkDG+ohgR4HI/Gro8ookqMVGajRTIUSpUsUUASoqNFAUTzRmoZozTFRPNKlmjNABRSzTpDNJQKKBWQ6JKkKdIUCGaYpGnTAFr0h68wrJopohJIy59aZfzNYgNNbjsjarPfWUMmNElxbqwPRlLrlT7xt8adkdts6H2G9kRuokub+WSJJAGSJMCQqejSMwOjI+qBnB6g7VY772OcPmSRbaaaKRNtXM5q6vtKdz5bEePlXTbmTSpI6+HdLbnpkDfFazgrYyoAXLZK5LbBAuF/VHdH3HzrK5zfJqUYJUcdtez0vDQbWb6epmLAkq4JwrKT4EKPxFWXs7O6W/Enjcoyx22lgFJUl3GQGBGfeDVh9pkI5cEn1g7L8GXJ/FR99UW3vJYiTDO8WrAOggasZxnIPmfvq3mUSutsi3wSJFM0jERSvwp7ibRGuVkymqURdNW3T0HnVM4Jx8cRubzhpu5LlL6ykSJ5bdIWWaPW6KqKN8BnbP2fSqPedqrmO6luba5ljdlMZctqdxkE6i+epVdvAKB6V47vtNeSzRXUl27TQfopDpDJuemBjxPXzpdNhvR2PgtwIOIQ8MVsDhnCJeYwAJE8hgZ209CcBG/aNaHhXHDeJxki9lulj4Vc6Xlto4CrNr1KFQbjCoc+vpXObXtFdx3El5HdOs8oYPKNOpgdOQcjH1F8PAV7v588S1iX5fLrClNWEzpJBK/R8wPuo6TH1Ym/7ByPDw7it9arrvIXtkQ8oSvFC7DU6IQevf3x9T0q88MjC3i3B029zccEea4AjwI5tcXzxiwSGzq2x/R4rkDdrL8zC7+Wzc4II9YYAlASQhAGlhlidwdzVi7IXUsvyi7eeVppi0UkjPktHhToyc93pttjAAxipSxyfJFTjVI6J2au0murA8wXFxHFcrNc/JjbiXIJjXQQCdI8cf4kDZdn7WCOSW5ijQfymplTugNyzFzZGP/qShcGqVDM6MHjdkZc4ZTgjIwevoaIZ5E0aJpF5YZUw30Fc5ZVyNgT19wqLxvwNZF5Nxxq7lisbBbe7mgY2rFY4raGRZGAGkO0n0BnbbzNbnh1kskvB1B0zWlrayNvtNC8bRunqUcRvk/rHHU1U4eI3KKI0uplRRgKGGAPIbdKxLcSgxuJpA0ShI21DKIAQFU46YYjfzo6bDejednb+7EXFQ9w3zfyhoRpi+aHOfSVOnc4we9nyrRPcF3bXJrkPeYnGo5JGogAAZIPh4V4Jrp4JdXNZY7oaJfIvnulz5NnB9wrLe2CylGLOrJnDI2kkHqpPkatjGnZXKVm74Z2ZbiCyRZ0R4w0mM4J3AUeLdD6fdn1r7N+DLiBriYyHo3NGo58VUJpI+Brc2d2lnwu3kLF42dea2QCVeXSxLL+qD8RHg+NUm/7NxheMoYRzrJhLE5lmbXCTrfUGc62EZUljnd96onlldJl0MUa5RpO3nYCThoFxFJzrZyAHwNSE/RD42IPgw2ztgbZpgr6JW5S/s+JRNGEQRFSvgr8hXcjyKyEj3xk+dfOqmtODI5rkyajGoPglUTTNRq8zodFKigY6KKKBBRRRQMKKKKANLQKKBWQ6BI0lp0CgQVJRSqaNTEwCGsoFQ5lBlqRB2xuRWS2ujG6SxnS8bK6t5MpDKfgQKxKM9akFXzoDsfTvZTtfDxm2HKkWKcaDLET3o2VgSVGQXQkbMPPfBBFbsQfJxzprs8uIEsZGCrjTglmJwBnLZPoPCvklSFIZScg5BBII9QR0r28QvhKkQeaaRlMmrXK7gdNBXUSB9bpVD09u7NC1DSqjsPaXtjBxGbl276kgBwf19WMyD7O2PPY+dV7sZ2Qi4s94Lm5uEktJhpVWQgI+dDAOpwco3Tw01zW3ujES0TOpxjIbH346iugexzjzjiYWVyflcbxHIG7KOZGTj0Rl/ap5I1HgjCVvkuLexW0JJN3dEkkknkEknqSeXS/IpZ/1u5/5H+XXTqKotltI5j+RSz/rdz/yP8uj8itn/W7n/kf5ddDvCGyvM0+BBVWB8dwRWovLpUl5nzrBNOdCpp6dN3HmPDwG/XMJZoxdOVP9xqF8pFRl9jNkoy15cgEgf0HUnA/o/M16YfZFBGMJxC9UZzhXiG/ngJXp4r2naXVHyRhZSV1kjCpoZR3CO9kgkZI26+A2vDOPd1p2WUoxwqDBK59CQMbHx8qnqHPCoOS/U6RXhyY8spRi+Y8srr+zWENGv8pcQzLrx86gPcGTtozWdfZVEd/5Tv8A4yoPwKVv2v1lZJ0TAgZwdahWTUvexjIHd36/Vr2PxiMBQhByBkKpBJIxkbdM7bdTt768eRzckk+HRZJRjVtclV/JTH/pO/8A99H/AAUfkpj/ANJ3/wDvo/4KuNpfksVcYK7MCcHJOdvgQevTGK2VWWxUjnUvskhcFX4jesD1BkiIPvBSue+0LhY4fcLZw3dzKOUrvzZQQCzEKgCgDoufiK+h6+Ye2fE/lV/eT+DSsq757keI0I96oD8asw25orzUoMvvsx7T272zcHvmVVJfku+ykSZ1RMfA5ZsbjIYgEEDN6PZef5TaziVWjt4TCyMobnKylGMkmQclRF9U/Q8a+cM17rPiLqjxtNKE0MERZXC6tsZUHGOtaZ6dSdplGPUOKpnWe3vaK34faS8MtZBJPca1mYEHQrkmQuR9dtTbeGsnYYFcbqK1PNW48agqRny5HN2KjFGaeasKw009NGaM0CHikaCaiTQCQUqM0qRIeaKVFAGnoFFNayHQJaaMVkAoxTohZjxTxUwKMU6CyGKeKyAUnooVkQKemlRTAmqeOa9aZMLxgAhGWVm2yBjR8QSy157S2eaSOGMZeV0jQebOQqj7yK+nOx3Y+z4PCuTHziPnLh9IZicZVCfopnGFHkM5O9ReRRJRg5eT5jli0HDhlJGQGUgn1wR0r1cGvzbTQ3C51QSRyYHjoYMV+IGPjX1bdPZ3imCUwTK+xRij59ynx9RXzx7Uexw4VdKIiTBcBniycldJGuMn62nUuCd8MM5IJMFPd7rRLZt5R9HxSB1V1OVYBgfMEZB+6lMxAOOu34nFVb2V8T+UcMtST3oQ0Db5/RHSufemg/GrTKuQQOv7t6zF5Tx2oWYtC6YBD57xOSAe73UO5qF7cKoB5ZUNGjFmJGOYFYrnHhsN/ICvZN2citykuThXGQX7uGyN9um9ZLQRh4REItRcHunrlW1agGOfWpavBpcmRThHlebf3M+jeqjFrNL6FJzzJHEWHOqRiA4GB3F+tjO6npVg7OKskUa6sBuYSQQcldIHX+0fuqzcUu2jwvcJOc4YqRjHv65rwXUzSmKUIchZB3FJ0nVjxxnYNVOvyZcuKvh7UuS3S4MeKba/272yE3DRoaMO2JNWoDAzlCudQGQd/wAK8NvwNYi7o+ohdOkyBhjOrSFIAGSD95r3vO4684ZyBlV3Ph470ptRBHKkyd91PXfGcH1P/e1c7T6jWR/tyctr7+79zTl0+CUlkpbl25Nxw61Ubqw9dJyCevw6/H4kVsK8vDYURSEJIzk5O4OBtv02x99equqUmo7X8U+SWV3cg4aOJ9H+0buxj++y18xC0ZYllxhC2hfUgeHmPX0rtntuvvze0sVYA3c652z3I8b4/tvGfhVAm4Y/EuIW/DojpC7MwGyLjVI2OmygADzwK06fi5FGfmkU5NyFG5PQDcn3Dxr1gvHHICmBIyqSdiCmGIA6/WWvprgXDLDhwW1t+VGzAbF15sh27zE95j/2Nq9XH+z9tfxmG6iVxvg47yE/WR+qn3VNapX2IPStI+UQaea23a3gL8Ou5rRzq0EFGxjXG26t7/A+oNafNaU7VoyuNOmSzTzUaKYqJZo1VGiixUSzSzSp0BQ6KVFADooooA04qVIU6yG4mGo11GjFMVIlqoJpBaloNMXAs0VIRmpco06FaIUVPlGmsRNFCtG77AXKRcSsJJMaRPGCT0Go6QT7iwPwrrHbbhd810XywTDkSa2C95wV2Ud7SqkaWwO/41w0weZFdk7Ee2NY4kt+JB2MYCidBrLAdOanXOMd5c58h1MZJp2iyE0+DU2vA7sssUTsV5Y3WSQ4lOnU4UDvb6zpOF3+Fe321yMlpwy3mOZtc8nXJWMAKAT+0v8Ad9KtfFPbNw2NcwCadj0VYmjGftNJjA9wPuri3bDjcl9dyXErByxCoQCqrGN1RVPTGTn1JPjSjcuapDnJJGfsv24u+HRvFbMgWRtbBow/e0hcjPTZR91br8r3E/14v+HX99UN0xvt4V7eF8KluX5MCmR8FtK46DGTuR503ij3ILLLwdJ4Z254rcxiRbi2wSQQbbJBHgd/cfjWW47X8ViUu1zaDAY724XOB0GTWo7Jdm76AyRy2kgR8MG1R4DDwwD4j/pFevtRwK+kj5UVmzh92OU2wcjSS+QdvLx61Dpw/GT3z9DxN7SuIt3i1sScbm1U/jSHtF4j523/AAi1oz2I4l4WLj9qP+Kl/MbiX9Tf+/H/ABUujH4h9SXwm7k9pPEAM5ttv9VSsP5UuIf6v/wiVqv5i8S/qT/3o/4qB2G4l/U3/vR/xVKOLGu7Iuc/CLRwP2hcUuC0cclumkav/CjB3weh671m4v7QuKW2A1zbMxx3Bbb48zvsNqq0XYzii502sq5GDiRBkeRw3TatXxjg1xalRdRNGZNRGoqdWMZOxPmPvqSxY2+PqReTIlyejtN2mueIukt0ykxroXSgUAE5O3mT4+gqyexa50cRYArrltrlItXQy5RwD8I2/GqHWexuHikjljkMboysrj6pB2b4eWDVnTW1xRWsj3qTO+cK7IXkamSRoWuJrgPM7Yk1QYxy11xnG/gMeG4wK2dlY8WRSrzxn5lkBBXuSn6Mg+aGoDpjpv6VoeCe2O0YaLsPGy7cxYy0cmPrBVJZc9cYPvqPaP2y2qIRYo80hHdZ0McanzYHDN54AGfMVgWlknSs60/6i5+9JR/go/tlmLX0KOVMsNpbJMVORzcu7DoPB1PQbMNqolZr27knkeaVy8krFnY9Sx6n09w2HSsNdKEdsUjjZJbpOXqFMUqYqZWPFKnSoAKKKKQBTpUUAOilRQBq6YpUxWY2mVRUwKxBqmhqSK2iaip4qOKkoqSK2GakDTxWOQ0xdxtQV8s0kXO+ayFvM0ARxvnT4eNG/XYf49P/AMqMjDwJNRkYHoNqCSRJt+rfhWeG67jRMcq7K24yVI6sD1G2x868YqVCY6Pb8jzMtvGVkMjoiFW2YuQF69NyMjw+FdD7GdkJrduJPLoEsULwoM6omMsWvLd3JUAx7YzudjVW9nDMeIW0QAKu+pgVB/RK0isPIgr19a7jZQBTM+DmeZmOR+qixg+7TEv3isWrzOL2r85N2kwRmtz/ADgqd3wPRPFHA1uBZQNJLrhGoNJzNDKVTCgsjk4PRem9VeCYQ8nmyWQ+RSM0+m2lOh5CvLMeIdz82ucfqirzx65VLe4zLEsl9zhEXi1IUSMkBwIyWXlozHUD9LAyMVRxciTTm5sW+U20xbNi3zk8QlxK2bbdVK53x9E4U53z4m2uS7Mop8EYJhFy1mlssW0oluQttLsJDEI2jxDu2MjbpkeVQjmACrcS2JCTJPdgWsp1QyckRsuId3POl6bjmjPQ4a3Wsx6rqwbn2twZM2LHmSRfKOXIc226oY4tjj9EcA5GVDdhjDrubBhLa3Bl/MW+cMRuOW29r9BOTFscfodgds2FIo7vO081ixMiXF3i2l79u/IMbD5nvOTO5wNxzB5HGQXWdXMmsizGKab82l71meS0f9Du3eU46jI8tlbXak25e4sTrt7gzfmDfOJFzdGPzYd1Bbp3Tj9CMA7ZlZ3a/m3MubE6oZzNixb5yCLXpUfmw7qiA93u/oxgHagCycA4HzRHPKbdo7olVMcGkm3EZ5URLp/5cZ3APdxXl7ddlGe1tNBGu3lECqAqoVnlCISABpOeX023PpWx7GcQaW0+Ti5gknRObFy4mRBGshRBoMS4GuJlOFyM5HgTaL9VliOMkYjlXAzkowkTA88qu1UrLKEzUsMJ4+x8+8U4TJbXDWs2kOhUE6u73gCG1HwwwOahLLyxJCjKyswy4XBbT0AJ+rnerl7Xiy3argBZIo5NlGWYF03bqcBR99UOuxhnuxqXqcfNDZkcV4GKKKKmUhTpUUwHRSooAlmlRRQIKdKigB0UUUAFFFFIDV0xRQKzG0lU4zUKkgqRBmfVQHpBaYWpFXAjLUDk+FZgKdFBaXYwaTUa9D71FEHiDRRLcYqYXNZyMfUpsD4kDr/hToW4wYorIwXfcmhXA8PjQFl29jttrvnk8IoJD+0zIo/AtXaq497INQuZZmZUi5TR7kDU5ZGAHqACfjXXZp0RTI7qqKMliwCgeZY7AVydbGXUOzoWukaPi/B3muYpnkiS2ghkGGhidw7hlYq8ikRrpKdDvpwRiqseDSq8ei44aUjS7UEx24bvmblHCxYGzx6gMD6exzvXvaJ2zN6xtrckW6Hc9Ocw+sfsA9B8T4YpGK04NNLbcnXyMmo1Ed1RV/M6MvA78acXPCe6GVe7BsratQH5vsDrbI+0fOgcCvhjFzwnuqyjuwbK2rUo/N9gdb5H2j51zrFPFXezL1M/tHyOk2nA7sHv3HCcCK4RcJBtrjkCgfMDC65MkeILbHJB9lhwiZHt2lk4U6RwzpImIV1FzPpVWEOVQ8xM4x9fY535Vinin7MvUPaPkd+teEItxBc2nJESo8TrGkIAU6m7jrGWPzjAldajbO5yDvwMbVwbsT2qfh8u+WgkI5ifhzE8mH4jY+BHcrC+inRZYZFdG6MpyPcfIjxB3FczVYZY5c8r1OrpM0Jx44foc59tFt/4Ob/bIf8A2sv/ANq5lXUvbCDJHbtG6ssTScxQQSC2kKx9NiPjXLBXU0iawq/zk5WtrrOh0UUVpMgUUUUAFFFFMBiilToAKKKKBBRRRQAUUUUAa2gUUVlNpOpxUUVJEH2M9RooqRUSptRRTESiFORiKKKfgj5POzk9TSooqJcFOlRTEXrs3KVjiVdgwDEYG5PU1Z54w1rfhtwttI4GTjUGQAkdD1PWlRW+POL+Ct/qOR0UUViJBTFFFAhinRRTEFdN7LxgcNtmGxklug2CcHSUAJXpnB69enlRRV2D/Ig8M8XF5SdUZ+iwIIwN6oC0UU8zuQvA6KKKpEFFFFADpUUUwCiiigB0UUUCCiiigBUUUUDP/9k=',
    title: 'Web Development',
    description: 'Learn modern web development technologies and build responsive websites.',
    link: "https://www.geeksforgeeks.org/web-development/",
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    title: 'Data Science ',
    description: 'Master data analysis, machine learning, and statistical modeling.',
    link: "https://www.geeksforgeeks.org/Data%20science/",
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2',
    title: 'Digital Maarketing ',
    description: 'Learn effective strategies for online marketing and brand growth.',
    link: "https://www.geeksforgeeks.org/free-digital-marketing-courses/",
  },
  {
    id: 4,
    image: 'https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg',
    title: 'Python',
    description: 'This course covers core programming concepts, tools for writing and running Python, and hands-on coding exercise',
    link: "https://www.geeksforgeeks.org/python-programming-language-tutorial/",
  },
  {
    id: 5,
    image: 'data:image/jpeg;base64,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',
    title: 'Java',
    description: 'full details about java .',
    link: "https://www.w3schools.com/java/",
  },
];












const Cards = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20 lg:px-40">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;














