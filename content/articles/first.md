---
title: My first Post
description: Learning how to use @nuxt/content to create a blog
img: first.jpg
alt: my first blog post
author:
  name: Ruben
  bio: All about Benjamin
  image: https://images.unsplash.com/
---

# My first blog post

How to split up the big csv file per year:

```powershell
>> Import-Csv results_in.csv -Delimiter ';' | %{
>>    $splat = @{
>>       'Path'              = "./$($_.Year).csv"
>>       'Delimiter'         = ';'
>>       'InputObject'       = $_
>>       'Append'            = $True
>>       'NoTypeInformation' = $True
>>    }
>>    Export-csv @splat
>> }
```

## This site will be statically hosted by github pages

Using Github actions it will build on commits and auto deploy. Also allows people without technical skills to add to this project.

## It will be a nice collection of le mans 24 results

Have a way to look through the full results
