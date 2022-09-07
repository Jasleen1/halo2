window.BENCHMARK_DATA = {
  "lastUpdate": 1662583150997,
  "repoUrl": "https://github.com/Jasleen1/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daira@jacaranda.org",
            "name": "Daira Hopwood",
            "username": "daira"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1806b88c7455f687e486ff23ae5e147b16d540a4",
          "message": "Merge pull request #626 from daira/daira-book-fullwidth\n\n[book] Full-width variable-base scalar mul allowing the scalar to be outside the base field",
          "timestamp": "2022-09-02T16:26:59+01:00",
          "tree_id": "e0c34324855541aa903f233047b677d04be724c1",
          "url": "https://github.com/Jasleen1/halo2/commit/1806b88c7455f687e486ff23ae5e147b16d540a4"
        },
        "date": 1662583147773,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 73962383,
            "range": "± 6579895",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3558984,
            "range": "± 52601",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 162326554,
            "range": "± 1632426",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4409203,
            "range": "± 724078",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 224086158,
            "range": "± 1647995",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4824310,
            "range": "± 95089",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 46333,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 169531,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 183820,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 300417,
            "range": "± 1793",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 299880,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 173295,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 187334,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 303265,
            "range": "± 1542",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 302463,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 362270,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 376132,
            "range": "± 3716",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 492723,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 492352,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3677240,
            "range": "± 16482",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 7047056,
            "range": "± 50066",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 12402396,
            "range": "± 133948",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 26979038,
            "range": "± 183777",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 50397931,
            "range": "± 450280",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 98669055,
            "range": "± 199655",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8995,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 13661,
            "range": "± 1581",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 19219,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 23016,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 33737,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 56783,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 116403,
            "range": "± 4696",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 225226,
            "range": "± 10567",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 464692,
            "range": "± 15632",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 984787,
            "range": "± 65968",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2123534,
            "range": "± 48749",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4566728,
            "range": "± 110093",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 9814872,
            "range": "± 152387",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 21537970,
            "range": "± 359086",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 47243185,
            "range": "± 978924",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 107304959,
            "range": "± 3460272",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34029,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 34143,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 185676068,
            "range": "± 14499371",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 396500413,
            "range": "± 2165242",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 852252487,
            "range": "± 14269768",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1824459398,
            "range": "± 4503092",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3912845292,
            "range": "± 10514406",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8372351909,
            "range": "± 21844690",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17819138598,
            "range": "± 32469431",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 37796001944,
            "range": "± 64825965",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 79934936579,
            "range": "± 266348244",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 114368318,
            "range": "± 1770625",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 198141381,
            "range": "± 1014636",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 349662733,
            "range": "± 2375899",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 636822441,
            "range": "± 3594540",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1182529685,
            "range": "± 7786795",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2230057445,
            "range": "± 11037307",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4252900139,
            "range": "± 17945476",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8227122175,
            "range": "± 27713991",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15833525564,
            "range": "± 54512675",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6170474,
            "range": "± 179393",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9557136,
            "range": "± 304705",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15451432,
            "range": "± 524103",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 26233906,
            "range": "± 557450",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 45032431,
            "range": "± 833512",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 80597599,
            "range": "± 656323",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 144357990,
            "range": "± 916122",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 267097584,
            "range": "± 5279599",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 484958780,
            "range": "± 2201168",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}