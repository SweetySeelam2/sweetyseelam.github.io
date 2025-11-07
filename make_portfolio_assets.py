from PIL import Image, ImageDraw, ImageFont
import os, textwrap

def text_wh(draw, text, font):
    """Return text width, height for modern Pillow."""
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

def make_thumb(path, title, subtitle=""):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img = Image.new("RGB", (1600, 900), (17, 22, 32))
    draw = ImageDraw.Draw(img)
    try:
        ftitle = ImageFont.truetype("DejaVuSans-Bold.ttf", 80)
        fsub = ImageFont.truetype("DejaVuSans.ttf", 40)
    except:
        ftitle = fsub = ImageFont.load_default()

    y = 360
    for line in textwrap.wrap(title, width=18):
        w, h = text_wh(draw, line, ftitle)
        draw.text(((1600 - w) // 2, y), line, font=ftitle, fill=(255, 255, 255))
        y += h + 6
    if subtitle:
        w, h = text_wh(draw, subtitle, fsub)
        draw.text(((1600 - w) // 2, y + 16), subtitle, font=fsub, fill=(183, 192, 204))
    img.save(path, quality=88)

def make_profile(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img = Image.new("RGB", (1200, 1200), (18, 23, 33))
    d = ImageDraw.Draw(img)
    try:
        f1 = ImageFont.truetype("DejaVuSans-Bold.ttf", 100)
        f2 = ImageFont.truetype("DejaVuSans.ttf", 36)
    except:
        f1 = f2 = ImageFont.load_default()
    cx, cy, r = 600, 500, 300
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(38, 44, 58))
    t = "SS"
    w, h = text_wh(d, t, f1)
    d.text((cx - w // 2, cy - h // 2), t, font=f1, fill=(255, 255, 255))
    cap = "Replace with your photo\n(center crop)"
    for i, line in enumerate(cap.splitlines()):
        lw, lh = text_wh(d, line, f2)
        d.text((cx - lw // 2, cy + r + 40 + i * (lh + 6)), line, font=f2, fill=(183, 192, 204))
    img.save(path, quality=90)

def make_svg_icon(path, label):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    svg = f"<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><rect width='128' height='128' rx='20' fill='#11151c' stroke='#232a36' stroke-width='2'/><text x='64' y='74' text-anchor='middle' font-family='DejaVu Sans, Arial' font-size='32' fill='#fff'>{label}</text></svg>"
    with open(path, "w") as f:
        f.write(svg)

# --- Images ---
entries = {
    "assets/images/home/featured/llm-rec.jpg": ("LLM Recommender", "Retrieve → Rank → Explain"),
    "assets/images/home/featured/fraud.jpg": ("Fraud Detection", "XGBoost + SHAP"),
    "assets/images/home/featured/netflix-roi.jpg": ("Netflix ROI Predictor", "Revenue & ROI Modeling"),
    "assets/images/home/featured/cancelsense.jpg": ("CancelSense API", "Flight Delay & Cancellation"),
    "assets/images/project-page/llm-rec.jpg": ("LLM Recommender", "Project Page"),
    "assets/images/project-page/fraud.jpg": ("Fraud Detection", "Project Page"),
    "assets/images/project-page/netflix-roi.jpg": ("Netflix ROI", "Project Page"),
    "assets/images/project-page/cancelsense.jpg": ("CancelSense API", "Project Page"),
    "assets/images/project-page/imdb-bert.jpg": ("IMDb BERT Sentiment", "NLP"),
    "assets/images/project-page/kmeans.jpg": ("K-Means Segmentation", "Clustering"),
    "assets/images/designs/ui1.jpg": ("UI Shot 1", "Portfolio Gallery"),
    "assets/images/designs/ui2.jpg": ("UI Shot 2", "Portfolio Gallery"),
    "assets/images/designs/ui3.jpg": ("UI Shot 3", "Portfolio Gallery"),
    "assets/images/mockups/m1.jpg": ("Mockup 1", "Portfolio Gallery"),
    "assets/images/mockups/m2.jpg": ("Mockup 2", "Portfolio Gallery"),
    "assets/images/mockups/m3.jpg": ("Mockup 3", "Portfolio Gallery"),
}

for path, (t, s) in entries.items():
    make_thumb(path, t, s)

make_profile("assets/images/home/profile.jpg")

# --- Icons ---
icons = {
    "assets/icons/python.svg": "Py",
    "assets/icons/sql.svg": "SQL",
    "assets/icons/tensorflow.svg": "TF",
    "assets/icons/powerbi.svg": "BI",
}
for p, l in icons.items():
    make_svg_icon(p, l)

print("✅ All 21 portfolio images generated successfully!")