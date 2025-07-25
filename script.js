// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page-section1").forEach((page) => {
    page.classList.remove("active");
  });
  document.querySelectorAll(".page-section").forEach((page) => {
    page.classList.remove("active");
  });

  // Show requested page
  document.getElementById(`${pageId}-page`).classList.add("active");

  // Scroll to top
  window.scrollTo(0, 0);
}

//   function for toggle menu

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Room data
const rooms = {
  deluxe: {
    title: "Deluxe Room",
    subtitle: "Spacious luxury with ocean views",
    mainImage:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000",
    price: "$199/night",
    description:
      "Our Deluxe Room offers 650 sq ft of luxurious space with a king-sized bed and stunning ocean views. The room features premium linens, a marble bathroom with rainfall shower, and a comfortable sitting area perfect for relaxing after a day at the beach.<br><br>Guests staying in the Deluxe Room enjoy access to all resort amenities including our infinity pool, private beach, and fitness center. Additional amenities include a 42-inch smart TV, high-speed Wi-Fi, coffee maker, and a minibar stocked with premium beverages.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "42-inch Smart TV",
      "Air Conditioning",
      "Coffee Maker",
      "Private Balcony",
      "Ocean View",
      "Rainfall Shower",
      "24-hour Room Service",
    ],
  },
  executive: {
    title: "Executive Suite",
    subtitle: "Premium suite with exclusive lounge access",
    mainImage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
    price: "$299/night",
    description:
      "Our Executive Suite offers 850 sq ft of luxurious space with a separate living area and private balcony overlooking the ocean. The suite features a king-sized bed with premium linens, a spacious marble bathroom with deep soaking tub and separate rainfall shower, and a comfortable sitting area perfect for relaxing after a day at the beach.<br><br>Guests staying in the Executive Suite enjoy exclusive access to our Executive Lounge with complimentary breakfast, afternoon tea, and evening cocktails. Additional amenities include a 55-inch smart TV, high-speed Wi-Fi, Nespresso coffee machine, and a minibar stocked with premium beverages.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "55-inch Smart TV",
      "Air Conditioning",
      "Nespresso Machine",
      "Private Beach Access",
      "24-hour Room Service",
      "Deep Soaking Tub",
      "In-room Safe",
      "Executive Lounge Access",
    ],
  },
  family: {
    title: "Family Cottage",
    subtitle: "Spacious cottage for family stays",
    mainImage:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000",
    price: "$399/night",
    description:
      "Our Family Cottage offers 1,200 sq ft of comfortable space with two separate bedrooms, a fully equipped kitchen, and a private garden. The master bedroom features a king-sized bed, while the second bedroom has two twin beds perfect for children.<br><br>The cottage includes a spacious living area with a large smart TV, dining area, and a private patio with outdoor seating. Families will appreciate the extra space, privacy, and convenient access to our kids' club and family-friendly activities. Additional amenities include high-speed Wi-Fi, washer/dryer, and daily housekeeping.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "Two Bedrooms",
      "Fully Equipped Kitchen",
      "Private Garden",
      "Washer/Dryer",
      "Smart TV",
      "Outdoor Seating",
      "Daily Housekeeping",
      "Kids' Club Access",
    ],
  },
};

// Story data
const stories = {
  anniversary: {
    title: "Unforgettable Anniversary",
    author: "By Sarah & James Thompson",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000",
    content: `
            <p>We celebrated our 25th wedding anniversary at Paradise Resort, and it was an experience we'll cherish forever. From the moment we arrived, the staff made us feel like royalty. The concierge surprised us with an upgrade to the Executive Suite with stunning ocean views.</p>
            
            <p>On our anniversary evening, the resort arranged a private beach dinner that was simply magical. We walked along a path lit with torches to find a beautifully decorated table right on the sand. The sunset painted the sky in hues of orange and pink as we enjoyed a gourmet five-course meal prepared by Chef Michael himself.</p>
            
            <div class="story-quote">
              "The attention to detail was extraordinary - from the personalized menu with our names to the live violin music that accompanied our dinner. It felt like we were the only two people in the world."
            </div>
            
            <p>The following days were filled with relaxation and adventure. We enjoyed couples massages at the spa, snorkeled in the crystal-clear waters, and took a sunset cruise that offered breathtaking views of the coastline. The staff remembered our names and preferences, making every interaction feel personal and special.</p>
            
            <p>What truly made our celebration unforgettable was how the resort staff went above and beyond to create memorable moments. On our last evening, we returned to our suite to find rose petals leading to the balcony, where champagne and chocolate-covered strawberries awaited us under the stars.</p>
            
            <p>Paradise Resort didn't just meet our expectations - they exceeded them in every way. We returned home feeling rejuvenated and more in love than ever. This anniversary celebration set a new standard for luxury hospitality, and we can't wait to return for our 30th!</p>
          `,
  },
  family: {
    title: "Family Vacation to Remember",
    author: "By The Johnson Family",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    content: `
            <p>Traveling with three children (ages 4, 7, and 10) can be challenging, but our vacation at Paradise Resort was nothing short of perfect. From the moment we arrived, the staff made our family feel welcomed and catered to.</p>
            
            <p>We stayed in a Family Cottage that had plenty of space for everyone. The kids were thrilled with their own room and the private garden where they could play. Meanwhile, my husband and I appreciated the separate living area where we could relax after the kids went to bed.</p>
            
            <p>The resort's kids' club was a game-changer. Our children begged to go every morning, where they enjoyed activities like treasure hunts, sandcastle building, and marine biology lessons. This gave us time to enjoy the spa, take a yoga class, or simply relax by the adults-only pool.</p>
            
            <div class="story-quote">
              "The family-friendly amenities made this the most relaxing vacation we've ever had with children. We actually returned home feeling rested!"
            </div>
            
            <p>Dining was a breeze with multiple kid-friendly options and accommodating staff who went out of their way to meet our picky eater's needs. The buffet breakfast had something for everyone, and the beachside grill became our go-to lunch spot.</p>
            
            <p>Some of our favorite family memories include snorkeling together in the protected cove, the family movie night on the beach with blankets and popcorn, and the resort's weekly bonfire with s'mores. The children especially loved the "dive-in" movies at the family pool.</p>
            
            <p>What impressed us most was how the staff anticipated our needs. From providing extra towels without being asked to setting up beach toys before we arrived at our chairs, their attention to detail was remarkable.</p>
            
            <p>We've already booked our return trip for next year. Paradise Resort has spoiled us for any other family vacation destination!</p>
          `,
  },
  honeymoon: {
    title: "Dream Honeymoon Experience",
    author: "By Michael & Emily Chen",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000",
    content: `
            <p>After months of wedding planning, we were looking for a honeymoon that would be truly relaxing and special. Paradise Resort exceeded our wildest dreams in every possible way.</p>
            
            <p>We arrived late in the evening to find our Ocean View Suite beautifully decorated with rose petals, candles, and a bottle of chilled champagne. The romantic ambiance set the tone for the entire week.</p>
            
            <p>Each morning began with breakfast on our private balcony overlooking the turquoise waters. We'd then spend our days alternating between relaxing on the pristine beach, swimming in the infinity pool, and indulging in spa treatments. The couples massage was particularly memorable, with skilled therapists working in perfect harmony to melt away our stress.</p>
            
            <div class="story-quote">
              "Every detail was perfect - from the rose petals on the bed to the champagne breakfast. The private beach became our sanctuary."
            </div>
            
            <p>The culinary experiences were exceptional. We especially enjoyed the romantic dinner under the stars at the resort's signature restaurant. The chef prepared a special tasting menu just for us, pairing each course with exquisite wines selected by the sommelier.</p>
            
            <p>One of our most memorable experiences was the private sunset cruise. The resort arranged for us to sail along the coast as the sun dipped below the horizon, complete with champagne and canapés. It felt like we had the entire ocean to ourselves.</p>
            
            <p>The staff anticipated our every need. When they learned it was our honeymoon, we received special surprises throughout our stay - from complimentary room upgrades to a romantic turndown service with chocolate-dipped strawberries each evening.</p>
            
            <p>What truly set Paradise Resort apart was the perfect balance of attentive service and privacy. Staff were always available when needed but never intrusive, allowing us to fully immerse ourselves in newlywed bliss.</p>
            
            <p>We left feeling more connected than ever and with memories that will last a lifetime. Paradise Resort wasn't just a vacation destination - it was the perfect start to our marriage.</p>
          `,
  },
};

// Show room details
function showRoomDetails(roomId) {
  const room = rooms[roomId];
  if (!room) return;

  // Populate room details
  document.getElementById("room-title").textContent = room.title;
  document.getElementById("room-subtitle").textContent = room.subtitle;
  document.getElementById("room-main-img").src = room.mainImage;
  document.getElementById("room-description").innerHTML = room.description;
  document.getElementById("room-price").textContent = room.price;
  document.getElementById("room-price-display").textContent =
    room.price + " x 3 nights";

  // Populate amenities
  const amenitiesGrid = document.getElementById("room-amenities");
  amenitiesGrid.innerHTML = "";
  room.amenities.forEach((amenity) => {
    const amenityItem = document.createElement("div");
    amenityItem.className = "amenity-item";
    amenityItem.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${amenity}</span>
          `;
    amenitiesGrid.appendChild(amenityItem);
  });

  // Show room details page
  showPage("room-details");
}

// Show story details
function showStoryDetails(storyId) {
  const story = stories[storyId];
  if (!story) return;

  // Populate story details
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-author").textContent = story.author;
  document.getElementById("story-image").src = story.image;
  document.getElementById("story-content").innerHTML = story.content;

  // Show story details page
  showPage("story-details");
}

// Change room image in gallery
function changeRoomImage(thumb) {
  const mainImg = document.getElementById("room-main-img");
  const newSrc = thumb.querySelector("img").src;
  mainImg.src = newSrc;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Set min dates for check-in/out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  document.getElementById("checkin").min = formatDate(today);
  document.getElementById("checkin").value = formatDate(today);

  document.getElementById("checkout").min = formatDate(tomorrow);
  document.getElementById("checkout").value = formatDate(tomorrow);

  // Form submission
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Form submitted! In a real implementation, this would send data to a server."
      );
    });
  });
});
