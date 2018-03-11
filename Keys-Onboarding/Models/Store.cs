using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Keys_Onboarding.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Store
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Store()
        {
            this.ProductSolds = new HashSet<ProductSold>();
        }
    
        public int Id { get; set; }
        [Required]
        [RegularExpression("^[a-zA-Z0-9 ]*$", ErrorMessage = "Only use English Alphabet Characters & Numbers Please")]
        [Display(Name = "Store Name")]
        public string Name { get; set; }
        [Required]
        [RegularExpression("^[a-zA-Z0-9 ]*$", ErrorMessage = "Only use English Alphabet Characters & Numbers Please")]
        [Display(Name = "Store Address")]
        public string Address { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProductSold> ProductSolds { get; set; }
    }
}
