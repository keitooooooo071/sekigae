$(function() 
{
    $('.l').on('click', function()
    {
        $(this).toggleClass('active');
    });

    $('.btn').on('click', function()
    {
        const active = document.getElementsByClassName('active');
        const num_2 = [];
        $('.l').text('');
        for(var i = 0; i < active.length; i++)
        {   
            const num = Math.floor(Math.random() * active.length + 1);
            if(num_2.indexOf(num) !== -1)
            {
                i --;
                continue;
            }else
            {
                num_2.push(num);
                active[i].innerHTML = `${num}`;
            }
        }

        const women = document.getElementsByClassName('women_num');
        const w_num2 = [];
        $('.women_num').text('');
        for(var j = 0; j < women.length; j ++)
        {
            const w_num = Math.floor(Math.random() * women.length + 1);
            if(w_num2.indexOf(w_num) !== -1)
            {
                j --;
                continue;
            }else
            {
                w_num2.push(w_num);
                women[j].innerHTML = `${w_num}`;
            }
        }

        const men = document.getElementsByClassName('men_num');
        const m_num2 = [];
        $('.men_num').text('');
        for(var e = 0; e < men.length; e ++)
        {
            const m_num = Math.floor(Math.random() * men.length + 1);
            if(m_num2.indexOf(m_num) !== -1)
            {
                e --;
                continue;
            }else
            {
                m_num2.push(m_num);
                men[e].innerHTML = `${m_num}`;
            }
        }
    });
    $('.o_btn').on('click', function()
    {
        $('.men').toggleClass('men_ac');
    });
    $('.w_btn').on('click', function()
    {
        $('.women').toggleClass('women_ac');
    });
});